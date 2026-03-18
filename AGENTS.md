# Repository Guidelines

## Project Structure & Module Organization
This repository is a Contao bundle. PHP sources live in `src/`, grouped by responsibility such as `Widget/`, `Controller/`, `Form/`, `Asset/`, and `EventListener/Contao/`. Contao integration files are under `contao/`, Twig templates under `templates/`, translations under `translations/`, and built frontend assets under `public/`. Edit source assets in `assets/js` and `assets/scss`; do not hand-edit compiled files in `public/`.

## Build, Test, and Development Commands
Use Composer for PHP dependencies and Yarn for asset builds:

- `composer install`: install bundle dependencies for local development.
- `yarn install`: install Encore, Sass, and frontend dependencies.
- `yarn build-dev`: compile development assets into `public/`.
- `yarn build-production`: build optimized production assets.

There is no dedicated automated test suite in this repository at the moment. Validate changes by rebuilding assets when needed and smoke-testing the widget in a local Contao backend/frontend installation.

## Coding Style & Naming Conventions
Follow the rules in `.php_cs`: Symfony style, short arrays, ordered imports, and the project header comment. Use 4 spaces for PHP indentation. Keep PSR-4 namespaces aligned with paths under `src/`, for example `HeimrichHannot\\MultiColumnEditorBundle\\Widget\\MultiColumnEditor`. Preserve existing file naming patterns such as `*Listener.php`, `*Controller.php`, and `messages.<locale>.yaml`.

For JavaScript, keep source changes in `assets/`, use ES6 syntax, and rebuild generated assets afterward.

## Testing Guidelines
Because no `tests/` directory or CI workflow is currently present, include manual verification notes with each change. Check PHP syntax on touched files, for example `php -l src/Widget/MultiColumnEditor.php`, and verify row add/remove/sort behavior plus backend rendering when UI logic changes.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects such as `fix #35`, `return all fields when no palette is defined`, and release-prep commits like `prepared 2.20.1`. Keep commits focused and descriptive; reference issue numbers when applicable.

Pull requests should summarize the behavioral change, list the Contao/PHP versions tested, and include screenshots or screen recordings for backend or frontend UI changes.
