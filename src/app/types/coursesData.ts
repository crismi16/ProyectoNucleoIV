import { Course } from "./courses";

export const coursesData: Course[] = [
    {
        id: "1",
        title: "JavaScript for Beginners",
        description: "Learn the fundamentals of JavaScript.",
        subject: "Programming",
        category: "Web Development",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 19.99,
        level: "Beginner",
        duration: 10,
        instructor: {
            name: "John Doe",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "5 years as a software engineer"
        },
        modules: [
        {
            id: "m1",
            title: "Introduction to JavaScript",
            lessons: [
            {
                id: "l1",
                title: "What is JavaScript?",
                duration: 10,
                videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
            }
            ]
        }
        ],
        enrolledStudents: 1500,
        rating: 4.5
    },
    {
        id: "2",
        title: "React from Scratch",
        description: "Master React.js with hands-on projects.",
        subject: "Web Development",
        category: "Frontend",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 29.99,
        level: "Intermediate",
        duration: 20,
        instructor: {
        name: "Jane Smith",
        image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
        experience: "7 years as a frontend developer"
        },
        modules: [
        {
            id: "m1",
            title: "React Basics",
            lessons: [
            {
                id: "l1",
                title: "JSX and Components",
                duration: 15,
                videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
            }
            ]
        }
        ],
        enrolledStudents: 1200,
        rating: 4.7
    },
    {
        id: "3",
        title: "Python for Data Science",
        description: "Learn Python and its libraries for data analysis.",
        subject: "Data Science",
        category: "Programming",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 39.99,
        level: "Intermediate",
        duration: 25,
        instructor: {
        name: "Alice Johnson",
        image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
        experience: "8 years as a data scientist"
        },
        modules: [
        {
            id: "m1",
            title: "Python Fundamentals",
            lessons: [
            {
                id: "l1",
                title: "Introduction to Python",
                duration: 20,
                videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
            }
            ]
        }
        ],
        enrolledStudents: 900,
        rating: 4.8
    },
    {
        id: "4",
        title: "Node.js Backend Development",
        description: "Build scalable backend applications with Node.js.",
        subject: "Web Development",
        category: "Backend",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 49.99,
        level: "Advanced",
        duration: 30,
        instructor: {
        name: "David Lee",
        image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
        experience: "10 years as a backend engineer"
        },
        modules: [
        {
            id: "m1",
            title: "Node.js Basics",
            lessons: [
            {
                id: "l1",
                title: "Setting up Node.js",
                duration: 25,
                videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
            }
            ]
        }
        ],
        enrolledStudents: 750,
        rating: 4.6
    },
    {
        id: "5",
        title: "SQL for Data Analysis",
        description: "Learn to query and manipulate data with SQL.",
        subject: "Database",
        category: "Data Analysis",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 24.99,
        level: "Intermediate",
        duration: 18,
        instructor: {
        name: "Emily White",
        image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
        experience: "6 years as a database administrator"
        },
        modules: [
        {
            id: "m1",
            title: "SQL Fundamentals",
            lessons: [
            {
                id: "l1",
                title: "Basic SQL Queries",
                duration: 12,
                videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
            }
            ]
        }
        ],
        enrolledStudents: 1100,
        rating: 4.9
    }
];
