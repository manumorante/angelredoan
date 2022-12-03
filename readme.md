[![wakatime](https://wakatime.com/badge/github/manumorante/angelredouan.com.svg)](https://wakatime.com/badge/github/manumorante/angelredouan.com)

# Angel Redouan

## Dev

- `yarn install`
- `yarn dev`
- Note: check `basePath`

## Deploy

Using Github Pages

- Finish dev and commit changes to `main` branch.
- Check `basePath` is your folder path in **github.io** `/angelredouan` in `next.config.js` file.
- `yarn build` - Create static files and export then to `out/` folder.
- `yarn deploy` - Add `out/` to stage and push to `gh-pages` branch.
