import React, { memo } from 'react'

const EgUsecallback = (props) => {
    console.log("Hello, I'm child",props)
  return (
    <>
    <div>EgUsecallback</div>

    <div>Item:{props.item}</div>
    </>
  )
}

export default memo(EgUsecallback)
// Note
// useMemo and this “import React, { memo } from 'react'
// const EgUsecallback = () => {
//     console.log("Hello, I'm child")
//   return (
//     <>
//     <div>EgUsecallback</div>
//     <div></div>
//     </>
//   )
// }
// export default memo(EgUsecallback)”memo is different. useMemo () is a hook and memo is a component which prevents the unnecessary re-rendering of a functional component. These both are used for component’s performance enhancement but this memo checks the in its component the prop value has been updated if yes then render component and no then will not render.
//It is same like shouldComponent Update in class component

//imp Note
// In react, there is a concept of referential equality in this if state or prop is updated the component will rerender 
// and if the component is re-rendered all the functions in it are recreated and in this our one of the prop is a fuction and
//  if the function recreated then our memo component thinks that the function might be updated so it rerenders the child component.
// So to overcome this problem we use Usecallback