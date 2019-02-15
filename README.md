# jacksonmoore.com.au

[![Build Status](https://travis-ci.com/jmanmini/jacksonmoore.com.au.svg?token=JoZk3BwxhGGsHyNskNSA&branch=master)](https://travis-ci.com/jmanmini/jacksonmoore.com.au)

Maybe one day we'll go open source.
Gottta figure out some password stuff first.

## TODO

- [*] Migrate dev.jacksonmoore.com.au to jacksonmoore.com.au
- [*] Publish the repo to docker hub (private)
- [*] Set build rules and tags
- [*] Docker compose to use the published images rather than local build in production (development to remain using local). Use docker-compose-prod.yaml
- [*] Set up ouroboros/watchtower for continuous deployment
- [*] Look into TravisCI
- [*] Setup TravisCI with tests using curl and grep
- [*] Set up hooks to build on docker
- [] Figure out a way to remove all password/keys used in raw code
