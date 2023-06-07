const Header = ({ course }) => <h1>{course.name}</h1>


const Content = ({ parts }) => 
  <>
    {parts.map((part) => <Part key={part.id}part={part}/>)}
  </>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Total = ({ parts }) => {
  
  const all = parts.reduce((sum,part) => sum+part.exercises,0)

  return(
  <strong>Number of exercises {all}</strong>
  )

} 

const Course = ({course}) => {

  const courseFormat = function(course) {
    return(
      <div key={course.id}> 
        <Header course={course}/>
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    )
  }

  const formatted = course.map(courseFormat)
  console.log(formatted)
  return(
    <div>
      {formatted}
    </div>
  )
}

export default Course