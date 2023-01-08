# momento-mori-calender

Your life is made up of 4160 weeks, and this tool will help you make the most of them.

Fill in a new square with each passing week, and you'll quickly experience improved focus, a heightened perspective on life, and a rush of motivation to take consistent action

# UI Design

Momento Mori Calender Design Prototype and specification, click to [view][momento-mori-design].

# Installation

Momento Mori is available as an [npm package][npm-home].

```bash
npm i momento-mori-calender --save
```

or if you prefer Yarn

```bash
yarn add momento-mori-calender
```

# Usage

Here's a simple example

```jsx
import MomentoMoriCalender from "momento-mori-calender";

export const Example = () => {
  return (
    <MomentoMoriCalender
      yearLabel={[5, 10, 15, 20, 30, 40, 50, 60, 70, 80]}
      boxColorOption={["#4ea69d", "#b350aa", "#a5c45a", "#a1405d"]}
      defaultBoxColor="#4ea69d"
      dateOfBirth="1999-10-16"
      showDateInput
      title="Momento Mori Life Calender"
    />
  );
};
```

# Props

## 1. yearLabel

yearLabel is an array of years

### Example:

yearLabel = {[10,20,30,40]}

## 2. boxColorOption

boxColorOption is an array of color

### Example:

boxColorOption = {['red','green','orange']}

## 3. defaultBoxColor

defaultBoxColor is a default color which is provided in case of no any boxColorOption

### Example:

defaultBoxColor = 'red'

## 4. dateOfBirth

dateOfBirth (YYYY-MM-DD) is a value on which momento mori calender is ganerated.You can provide dateOfBirth or use date picker by passing showDateInput as props

### Example:

dateOfBirth = '1999-10-16'

## 5. title

title sets title of the calender

### Example:

title = 'Momento Mori Life Calender'

[npm-home]: https://www.npmjs.com/package/momento-mori-calender
[momento-mori-design]: https://momento-mori-calender.netlify.app/
