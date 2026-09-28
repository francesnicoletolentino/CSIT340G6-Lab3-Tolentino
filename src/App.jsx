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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name="Frances Nicole P. Tolentino" courseCode="CSIT340" section="G6" />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return <footer>{props.name} - {props.courseCode} - {props.section}</footer>
}

export default App