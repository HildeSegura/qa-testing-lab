# QA Testing Lab

Proyecto de automatización con **Playwright** para pruebas de UI web y API.

## Estructura de carpetas

```
qa-testing-lab/
├── tests/
│   ├── ui/              # Pruebas de interfaz de usuario
│   ├── api/             # Pruebas de API REST
│   └── fixtures/        # Fixtures compartidos (setup/teardown)
├── pages/               # Page Objects (patrón POM)
├── helpers/             # Helpers reutilizables (API, utilidades)
├── data/                # Datos de prueba
├── reports/             # Reportes generados (excluidos de git)
├── .github/
│   └── workflows/       # Pipeline CI (GitHub Actions)
├── playwright.config.ts # Configuración central de Playwright
└── package.json
```

## Instalación

```bash
npm install
npx playwright install
```

## Ejecución de pruebas

| Comando | Descripción |
|---|---|
| `npm test` | Todas las pruebas |
| `npm run test:ui` | Solo pruebas de UI |
| `npm run test:api` | Solo pruebas de API |
| `npm run test:headed` | UI en modo headed (visible) |
| `npm run report` | Ver reporte HTML |

## Variables de entorno

| Variable | Descripción | Default |
|---|---|---|
| `BASE_URL` | URL base de la app web | `https://your-app.example.com` |
| `API_BASE_URL` | URL base de la API | `https://api.your-app.example.com` |

## Convenciones

- Los tests de UI van en `tests/ui/` y usan Page Objects de `pages/`.
- Los tests de API van en `tests/api/` y usan helpers de `helpers/`.
- Los datos de prueba se centralizan en `data/`.
- Los fixtures compartidos viven en `tests/fixtures/base.fixture.ts`.

## Puntos clave

<!-- playwright.config.ts define dos proyectos separados: 'ui' (Chrome) y 'api',
     lo que permite ejecutarlos de forma independiente con npm run test:ui o test:api -->
- `playwright.config.ts` contiene dos proyectos: **ui** (Chrome) y **api**, configurables de forma independiente.

<!-- Las URLs base se inyectan mediante variables de entorno, facilitando el cambio
     entre ambientes (local, staging, producción) sin tocar el código -->
- Las URLs base se controlan con `BASE_URL` y `API_BASE_URL` (variables de entorno).

<!-- El pipeline de CI en .github/workflows/ci.yml instala dependencias, browsers
     y ejecuta todas las pruebas automáticamente en cada push o pull request a main -->
- El CI corre todas las pruebas en cada push/PR a `main` y sube el reporte HTML como artefacto.

<!-- El patrón Page Object Model (POM) en pages/ desacopla la lógica de navegación
     de los tests, haciendo el código más mantenible y reutilizable -->
- Se usa el patrón **Page Object Model (POM)** en `pages/` para mantener los tests limpios y reutilizables.

<!-- Los fixtures en tests/fixtures/base.fixture.ts permiten extender el contexto
     de Playwright con setup/teardown compartido entre múltiples suites de prueba -->
- Los fixtures en `tests/fixtures/` centralizan el setup y teardown compartido entre suites.
