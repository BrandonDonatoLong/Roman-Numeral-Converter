# My Development Process

As this is for a programming test I am going to describe a little bit how I developed this.

I started with the development of the utilities to handle the conversion between Roman Numerals and Decimal and vice-versa.
I started with a brute-force approach as that  basically reinforced the pattern needed to create it to do this. I also 
developed a bunch of happy path tests. This allowed me to keep on going and have a platform to verify what I was doing was working. That pattern was basically. 
Take down a sample then check against known values until it finds something. I finished this for the digits 9 through 1 and then added, 10. 
Once I had that I moved to converting from Roman Numerals to decimal numbers.

It was while doing that, that the pattern became much more apparent. I think wrote the "DecimalToRomanMap" which I then 
simplified from a series of if statements to a for loop through the map while doing an if statement and then wrapping 
that in a loop. You can see this transition here in [this commit.](https://github.com/BrandonDonatoLong/Roman-Numeral-Converter/commit/45f37643fb9e170e78785170c559d09003c0e8c1)

With the gambit of unit tests that I wrote it made refactoring the inner  workings of the utilities very easy to do with 
confidence that I am not breaking anything.

After I was done writing the algorithms I started to work on creating a web page to make it work. I went back to the 
requirement and pulled out some very key learnings that I needed to handle. One was that I needed to skip any invalid 
characters in the roman numeral testing, and the next is that it should follow the `RomanNumeral.toRoman` and 
`RomanNumeral.fromRoman` api format. So I made this changes and spent a day working on the layout of the website and the converter

Overall I really enjoyed working on this test. It was challenging and fun to see stuff start to fall into place. I got 
some reinforcement on React Testing Library and got to play around a bit with [MaterialUI](https://material-ui.com/) which I have seen but haven't 
really played around with.

### Forward looking

What would I have done if I had more time or resources. Probably the first thing I would do to make my life easier was to 
use some of the "design-system" type features of MaterialUI. Particularly around Themeing. Having a 
[Styled-system](https://styled-system.com/) based design system makes layout SO much easier that I realized I had been 
taking the design system at Hellofresh for granted.

I mentioned I would have wanted to do some more stuff around showing the calculation very similar to 
[this website](https://www.rapidtables.com/convert/number/roman-numerals-converter.html) that I took inspiration from. 
Would have been a cool feature to have. However The header took so much longer than I anticipated; and I chose to focus 
on code and testing rather than new functionality.

---

## From here on down the rest is boiler plate from create-react-app

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

