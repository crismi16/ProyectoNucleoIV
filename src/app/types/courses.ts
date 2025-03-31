
export type Course = {
    id: string;
    title: string;
    description: string;
    subject: string;
    category: string;
    image: string;
    price: number;
    level: string;
    duration: number;
    instructor: Instructor;
    modules: Module[];
    enrolledStudents: number;
    rating: number;
}

type Instructor ={
    name: string;
    image: string;
    experience: string;
}

type Module = {
    id: string;
    title: string;
    lessons: Lesson[];
}

type Lesson ={
    id: string;
    title: string;
    duration: number;
    videoUrl: string;
}
