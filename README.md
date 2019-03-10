# jacksonmoore.com.au

[![Build Status](https://travis-ci.com/jmanmini/jacksonmoore.com.au.svg?token=JoZk3BwxhGGsHyNskNSA&branch=master)](https://travis-ci.com/jmanmini/jacksonmoore.com.au)

Maybe one day we'll go open source.
Gottta figure out some password stuff first.

## TODO

- [x] Migrate dev.jacksonmoore.com.au to jacksonmoore.com.au
- [x] Publish the repo to docker hub (private)
- [x] Set build rules and tags
- [x] Docker compose to use the published images rather than local build in production (development to remain using local). Use docker-compose-prod.yaml
- [x] Set up ouroboros/watchtower for continuous deployment
- [x] Look into TravisCI
- [x] Setup TravisCI with tests using curl and grep
- [x] Set up hooks to build on docker
- [ ] Figure out a way to remove all password/keys used in raw code

This branch is currently in progress. It is only being used for testing purposes, and only localy.