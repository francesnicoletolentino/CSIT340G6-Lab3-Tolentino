const App = () => {
  const course = {
    name: 'Information Technology',
    parts: [
      { name: 'Applications Development and Emerging Technologies', exercises: 3 },
      { name: 'Data Analytics 1', exercises: 3 },
      { name: 'Information Management 2', exercises: 3 }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part =>
        <Part key={part.name} part={part} />
      )}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

export default App