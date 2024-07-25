# News Aggregator

News Aggregator is a news aggregator built with React, TypeScript, Vite adn uses the [News API](https://newsapi.org/).

## Instalation Instructions

This codebase uses pnpm as package manager. To install the dependencies, run the following command:

```
pnpm install
```

or alternatively you can use yarn orn npm:

```
yarn install
```

or

```
npm install
```

An example env has been included in the `.env.example` file. Copy the file to `.env` and fill in the values.

## Running the app

### To run the app in development mode, run the following command:

```
npm run dev
```

### To build the app for production and run it in production mode, run the following commands:

```
npm run build
```

and then

```
npm run preview
```

## Running tests

To run the tests, run the following command:

```
npm run test
```

## Design decisions and code structure

I’ve built this app using React with TypeScript to ensure type safety and maintainability. TypeScript enhances the development experience by providing autocompletion and preventing type-related errors. The directory structure is thoughtfully organized to facilitate easy navigation and maintain a well-structured codebase, contributing to a smooth developer experience and minimizing confusion. The code structure adheres to [atomic design principles](https://atomicdesign.bradfrost.com/chapter-2/)) for better component organization and reusability. In the absence of a UI design file, I aimed to keep the design straightforward, prioritizing functionality and layout. To prevent className conflicts, I utilized style modules. The app's layout is designed to be responsive and works well across three device types: mobile, tablet, and desktop. All the colors used are css variables and have been declared in index.css file.

## Assumptions and trade-offs

- Initially there was a disparity between the news API and the app's requirements. Two different api endpoints have been used and distributed between the two pages. Although the app consists of three pages in total(Home, Search and Category).

  - /everything endpoint
    While this endpoint allows for sorting by relevance, it does not provide any filtering options. This endpoint has been used to implement the `search` page.

  - /top-headlines endpoint
    While this endpoint provides filtration options, it does not allow for sorting options. This endpoint has been used to implement the `category` page.

- The news api on a developer plan is limited to 100 articles. If there are pages beyond the first 100 articles the application will error out.

- There are some articles that do not have an image or a broken link. I have used a placeholder image for these articles.

- Most of the articles that are returned from the top-headlines endpoint do not have an image(used fallback image here) and neither do they have a description/content returned. Please use the search page to check the collapsible description feature.

- Tracking user activity is implemented as just a console log. For an actual app the only change necessary would be to slightly modify the code to send the data to a backend or a service like google analytics.

- The report analytics feature is also logging data to the console.

## Screenshots

### Home page

![Home page](./screenshots/home-page-desktop.png)
![Home page](./screenshots/home-page-mobile.png)

### Search page

![Search page](./screenshots/search-page-desktop.png)
![Search page](./screenshots/search-page-mobile.png)

<caption>The sort by options become a part of the horizontal scrollable top bar.</caption>

### Category page

![Category page](./screenshots/category-page-desktop.png)
![Category page](./screenshots/category-page-mobile.png)

<caption>The filter by options become a part of the horizontal scrollable top bar.</caption>

### Performance optimizations

- The app implements lazy loading for all the available routes on the app ensuring that no js bundle is loaded until it is needed. The impact of this might not be visible on a demo app like this but makes a difference on a production app.
- This project uses react-query to fetch data from the news api. This library provides a simple and efficient way to manage data fetching and caching. I have cached both api request for 5 minutes as their stale time to avoid unnecessary requests.
- The app memoizes the certain calculations to avoid recalculating them on every render.
- Provided I had more time I had implemented the description collapsible feature such that it does not result in layout shifts.
- Uses react-router-dom's Outlet for constructing the routes. If the design had used a comprehensive layout, this would prevent the react router from re-rendering the entire page on every route change.
- The app uses pagination to display set of articles on the page. Apps like this need good seo and infinite loading is not a good idea. If there was a condition to use jut infinite scroll, I would have used a virtualized list so as to not hurt the performance.