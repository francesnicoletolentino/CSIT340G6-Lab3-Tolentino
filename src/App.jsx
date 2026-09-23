const App = () => {
  const course = 'Information Technology'
  const a = 'Applications Development and Emerging Technologies'
  const ex1 = 3
  const b = 'Data Analytics 1'
  const ex2 = 3
  const c = 'Information Management 2'
  const ex3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={a} exercises1={ex1}
        part2={b} exercises2={ex2}
        part3={c} exercises3={ex3}
      />
      <Total total={ex1 + ex2 + ex3} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

export default App