# FROM node:16 AS build-stage

# WORKDIR /usr/src/app

# COPY . .

# RUN npm ci

# RUN npm run build

# # This is a new stage, everything before this is gone, except the files we want to COPY
# FROM nginx
# # COPY the directory build from build-stage to /usr/share/nginx/html
# # The target location here was found from the Docker hub page
# COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

FROM node:16 AS build-stage
WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
ENV WATCHPACK_POLLING=true

RUN npm ci --only=production

# Add a new build stage for testing
FROM build-stage AS test-stage
RUN CI=true npm test

RUN npm run build


FROM nginx

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html