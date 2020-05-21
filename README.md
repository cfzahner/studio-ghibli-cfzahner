# Studio Ghibli API Practice

Create a row of [`input type="radio"`es](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio). These will correspond with these [_endpoints_](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e74abaaf-69be-4bbc-b27f-df44217358ea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200518T194249Z&X-Amz-Expires=86400&X-Amz-Signature=9f603084cea3a33091df0f5a3ee14d1b30707bcd3e8bef40d515672ae14f90f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22) from the [Studio Ghibli API.](https://ghibliapi.herokuapp.com/)

As a user selects a 🔘, `fetch` the appropriate data and display in a `<table>`. _All `fetch`ing should be done from inside the 'api' 📁._ You will only need `GET` _requests_ for this assignment, but there are multiple _endpoints,_ of course.

**Notice that the _endpoints_ do follow a simple pattern...you may be able to avoid some repetitive code! 🤔**

Use `documentQuerySelectorAll` and `addEventListener("change")`. Set up your 'api' 📁 such that the actual _endpoint_ is derived from the selected 🔘.

To get started, you will probably just want to get 1 single 🔘 working by itself with a `querySelector` on that one first.

You can browse through the [Studio Ghibli API.](https://ghibliapi.herokuapp.com/) documentation and just pick 3-4 fields from each of the _endpoints_ 👆🏽.

Use `state`, and `render` along with _stateless, functional components_ as we lurned about in class.

---

_If you do bonus, create a separate `branch`._

**Bonus:** Add a `input type="checkbox` after each entry in any of the `<tables>`. If a user checks this, 'highlight' the row. You'll probably just want to add a `.is-highlighted` _class_ to your CSS and [`toggle`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) that one. You'll need [`closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) to get to the _parent_ `tr`.
