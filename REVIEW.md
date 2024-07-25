# Review

### Link to the app
https://news-api-black-omega.vercel.app/

### Self assessment
- Code quality - (9/10) -> Code is pretty well written and easy to read. The directory structure is well crafted. I could have done the layout better component better though.
- Performance - (10/10) -> The app is pretty performant. All necessary optimizations are in place. Lazy loading for components and also images when they are not in the viewport are implemented. 
- UI &UX - (9/10) -> The app is responsive, has a decent layout. Works across mobiles, tablets and desktops. Care is taken to constrain the layout so that it's not distorted on the ultra wide screens. Attention to detail when user click on read more and then moves their cursor out of the card, it collapses on its own. Filters stay sticky at the top as user scrolls down on the articles. If a title is truncated, an inbuilt tooltip appears with the full version of the article title. Loading state has been incorporated to not leave the user guessing while waiting for the api response. Given the time constraints I had to resort for a not so good looking UI. I would have done a better job with the UI.
- Test Coverage - (9/10) -> The app has decent test coverage. Complex functionalities of the card component are covered. Test cases for error and loading states as well. It also covers test to see if the tracking functions are being called correctly. Only thing I could have added is mock api responses for testing.
- Proper implementation - (9/10) -> To conclude, all the features have been implemented according to the requirements given the time constraints. The things I'd have like to add are a better UI and a api mocking for tests.