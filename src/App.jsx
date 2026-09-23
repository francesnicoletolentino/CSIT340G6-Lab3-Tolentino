const App = () => {
  const course = 'Information Technology'
  const part1 = {
    name: 'Applications Development and Emerging Technologies',
    exercises: 3
  }
  const part2 = {
    name: 'Data Analytics 1',
    exercises: 3
  }
  const part3 = {
    name: 'Information Management 2',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

export default App