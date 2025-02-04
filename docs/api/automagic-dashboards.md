# Automagic dashboards

  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query](#get-apiautomagic-dashboardsentityentity-id-or-query)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query](#get-apiautomagic-dashboardsentityentity-id-or-querycellcell-query)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query/compare/:comparison-entity/:comparison-entity-id-or-query](#get-apiautomagic-dashboardsentityentity-id-or-querycellcell-querycomparecomparison-entitycomparison-entity-id-or-query)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query/rule/:prefix/:rule](#get-apiautomagic-dashboardsentityentity-id-or-querycellcell-queryruleprefixrule)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query/rule/:prefix/:rule/compare/:comparison-entity/:comparison-entity-id-or-query](#get-apiautomagic-dashboardsentityentity-id-or-querycellcell-queryruleprefixrulecomparecomparison-entitycomparison-entity-id-or-query)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/compare/:comparison-entity/:comparison-entity-id-or-query](#get-apiautomagic-dashboardsentityentity-id-or-querycomparecomparison-entitycomparison-entity-id-or-query)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/rule/:prefix/:rule](#get-apiautomagic-dashboardsentityentity-id-or-queryruleprefixrule)
  - [GET /api/automagic-dashboards/:entity/:entity-id-or-query/rule/:prefix/:rule/compare/:comparison-entity/:comparison-entity-id-or-query](#get-apiautomagic-dashboardsentityentity-id-or-queryruleprefixrulecomparecomparison-entitycomparison-entity-id-or-query)
  - [GET /api/automagic-dashboards/database/:id/candidates](#get-apiautomagic-dashboardsdatabaseidcandidates)

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query`

Return an automagic dashboard for entity `entity` with id `id`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`show`** invalid show value

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query`

Return an automagic dashboard analyzing cell in  automagic dashboard for entity `entity`
   defined by
   query `cell-querry`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`cell-query`** value couldn't be parsed as base64 encoded JSON

*  **`show`** invalid show value

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query/compare/:comparison-entity/:comparison-entity-id-or-query`

Return an automagic comparison dashboard for cell in automagic dashboard for entity `entity`
   with id `id` defined by query `cell-querry`; compared with entity `comparison-entity` with id
   `comparison-entity-id-or-query.`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`cell-query`** value couldn't be parsed as base64 encoded JSON

*  **`show`** invalid show value

*  **`comparison-entity`** Invalid comparison entity type. Can only be one of "table", "segment", or "adhoc"

*  **`comparison-entity-id-or-query`**

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query/rule/:prefix/:rule`

Return an automagic dashboard analyzing cell in question  with id `id` defined by
   query `cell-querry` using rule `rule`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`cell-query`** value couldn't be parsed as base64 encoded JSON

*  **`prefix`** invalid value for prefix

*  **`rule`** invalid value for rule name

*  **`show`** invalid show value

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/cell/:cell-query/rule/:prefix/:rule/compare/:comparison-entity/:comparison-entity-id-or-query`

Return an automagic comparison dashboard for cell in automagic dashboard for entity `entity`
   with id `id` defined by query `cell-querry` using rule `rule`; compared with entity
   `comparison-entity` with id `comparison-entity-id-or-query.`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`cell-query`** value couldn't be parsed as base64 encoded JSON

*  **`prefix`** invalid value for prefix

*  **`rule`** invalid value for rule name

*  **`show`** invalid show value

*  **`comparison-entity`** Invalid comparison entity type. Can only be one of "table", "segment", or "adhoc"

*  **`comparison-entity-id-or-query`**

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/compare/:comparison-entity/:comparison-entity-id-or-query`

Return an automagic comparison dashboard for entity `entity` with id `id` compared with entity
   `comparison-entity` with id `comparison-entity-id-or-query.`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`show`** invalid show value

*  **`comparison-entity`** Invalid comparison entity type. Can only be one of "table", "segment", or "adhoc"

*  **`comparison-entity-id-or-query`**

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/rule/:prefix/:rule`

Return an automagic dashboard for entity `entity` with id `id` using rule `rule`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`prefix`** invalid value for prefix

*  **`rule`** invalid value for rule name

*  **`show`** invalid show value

## `GET /api/automagic-dashboards/:entity/:entity-id-or-query/rule/:prefix/:rule/compare/:comparison-entity/:comparison-entity-id-or-query`

Return an automagic comparison dashboard for entity `entity` with id `id` using rule `rule`;
   compared with entity `comparison-entity` with id `comparison-entity-id-or-query.`.

### PARAMS:

*  **`entity`** Invalid entity type

*  **`entity-id-or-query`** 

*  **`prefix`** invalid value for prefix

*  **`rule`** invalid value for rule name

*  **`show`** invalid show value

*  **`comparison-entity`** Invalid comparison entity type. Can only be one of "table", "segment", or "adhoc"

*  **`comparison-entity-id-or-query`**

## `GET /api/automagic-dashboards/database/:id/candidates`

Return a list of candidates for automagic dashboards orderd by interestingness.

### PARAMS:

*  **`id`**

---

[<< Back to API index](../api-documentation.md)