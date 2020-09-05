# rational-cli

> Simple Node.js wrapper for IBM's scm tool that makes it less tedious to work with.

This wrapper has been tested with `v6.0.6` but may work with later versions.

## Getting started

1. Download SCM tools for your platform under the "Plain .zip Files" found at [Rational Team Concert downloads](https://jazz.net/downloads/rational-team-concert/releases/6.0.6?p=allDownloads)
2. Extract SCM tools and take note of the full path to one of the `scm` binaries under `jazz/scmtools/eclipse`

```
/path/to/jazz
└── jazz
    ├── jre
    └── scmtools
        └── eclipse
            ├── fec
            ├── lscm
            └── scm
```

3. Copy `.env.example` to `.env`
4. Fill in `.env`

```
RATIONAL_SCM=<path/to/jazz>/jazz/scmtools/eclipse/lscm
RATIONAL_REPOSITORY=https://<fqdn>:9443/ccm/
RATIONAL_USERNAME=<username>
RATIONAL_PASSWORD=<password>
```
