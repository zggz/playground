

interface Person {
    age: number
    name: string
}

type School = 'student' | 'teacher'


const school: Record<School, Person> = {
    student: {
        name: 'tom',
        age: 12
    },
    teacher:{
        name: 'sam',
        age:20
    }
}
console.log(school);

type Num = "one" | "two"

const num: Record<Num, number> = {
    one:1,
    two:2
}
