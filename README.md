# pwa-reactcute
Progressive Web Apps ReactCute

## Folder Structure

After creation, your project should look like this:

```
pwa-reactcute
  README.md
  pwa-hn-react/
    README.md
    node_modules/
    firebase.json
    package.json
    public/
      512x512.png
      favicon.ico
      index.html
      manifest.json
    src/
      actions/
        index.js
      components/
        Ask.js
        Comment.js
        CommentItem.js
        Container.js
        Default.js
        DetailComment.js
        Item.js
        Jobs.js
        Newest.js
        News.js
        Show.js
      const/
        index.js
      public/
        loading.js
      reducers/
        detailcomment.js
        hnReducer.js
        index.js
      store/
        index.js
      index.css
      index.js
      logo.svg
      registerServiceWorker.js
```

## How To use

``` bash
#clone this repo first
git clone https://github.com/budhip/pwa-reactcute.git

# install dependencies
cd pwa-hn-react
npm install

# Runs the app in the development mode
npm start

# build for production and deploy to firebase
npm run build && firebase deploy
```

live-demo: https://react-exercise-12204.firebaseapp.com/
