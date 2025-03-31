import { Course } from "./courses";

export const coursesData: Course[] = [
    {
        id: "1",
        title: "Programación desde Cero",
        description: "Aprende los fundamentos de la programación desde cero con Pseint.",
        subject: "Programación",
        category: "Lógica de Programación",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 19.99,
        level: "Principiante",
        duration: 25,
        instructor: {
            name: "Code For IT",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "5 años enseñando lógica de programación"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de Programación",
                lessons: [
                    { id: "l1", title: "Introducción", duration: 10, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=1" },
                    { id: "l2", title: "Conceptos básicos", duration: 12, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=2" },
                    { id: "l3", title: "Algoritmos", duration: 14, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=3" },
                    { id: "l4", title: "Descargar Pseint", duration: 8, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=4" },
                    { id: "l5", title: "Sentencias, variables y tipos de datos", duration: 15, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=5" },
                    { id: "l6", title: "Interacción con el usuario", duration: 10, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=6" },
                    { id: "l7", title: "Operadores aritméticos", duration: 12, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=7" },
                    { id: "l8", title: "Operadores relacionales", duration: 10, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=8" },
                    { id: "l9", title: "Operadores lógicos", duration: 10, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=9" },
                    { id: "l10", title: "Estructuras de control", duration: 14, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=10" },
                    { id: "l11", title: "Calculadora Básica", duration: 12, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=11" },
                    { id: "l12", title: "Diagramas de flujo", duration: 13, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=12" },
                    { id: "l13", title: "Conversor de temperatura", duration: 10, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=13" },
                    { id: "l14", title: "Calcular porcentaje de alumnos", duration: 10, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=14" },
                    { id: "l15", title: "Estructura de decisión (simple)", duration: 15, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=15" },
                    { id: "l16", title: "Ejercicio descuento en tienda", duration: 12, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=16" },
                    { id: "l17", title: "Estructura de decisión doble", duration: 14, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=17" },
                    { id: "l18", title: "Ejercicio Auto 'Inteligente'", duration: 15, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=18" },
                    { id: "l19", title: "Estructura de decisión Múltiple (Switch)", duration: 15, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=19" },
                    { id: "l20", title: "Ejercicio Menú con Switch (Condicional Múltiple)", duration: 18, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=20" },
                    { id: "l21", title: "Escalera de IFs (Estructuras de decisión)", duration: 16, videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu&index=21" }
                ]
            }
        ],
        enrolledStudents: 1500,
        rating: 4.9
    },
    {
        id: "2",
        title: "React desde Cero",
        description: "Domina React.js con proyectos prácticos.",
        subject: "Desarrollo Web",
        category: "Frontend",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 29.99,
        level: "Intermedio",
        duration: 20,
        instructor: {
            name: "Jane Smith",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "7 años como desarrolladora frontend"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de React",
                lessons: [
                    {
                        id: "l1",
                        title: "JSX y Componentes",
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
        title: "Python para Ciencia de Datos",
        description: "Aprende Python y sus librerías para análisis de datos.",
        subject: "Ciencia de Datos",
        category: "Programación",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 39.99,
        level: "Intermedio",
        duration: 25,
        instructor: {
            name: "Alice Johnson",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "8 años como científica de datos"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de Python",
                lessons: [
                    {
                        id: "l1",
                        title: "Introducción a Python",
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
        title: "Desarrollo Backend con Node.js",
        description: "Construye aplicaciones backend escalables con Node.js.",
        subject: "Desarrollo Web",
        category: "Backend",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 49.99,
        level: "Avanzado",
        duration: 30,
        instructor: {
            name: "David Lee",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "10 años como ingeniero backend"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de Node.js",
                lessons: [
                    {
                        id: "l1",
                        title: "Configuración de Node.js",
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
        title: "SQL para Análisis de Datos",
        description: "Aprende a consultar y manipular datos con SQL.",
        subject: "Bases de Datos",
        category: "Análisis de Datos",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 24.99,
        level: "Intermedio",
        duration: 18,
        instructor: {
            name: "Emily White",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "6 años como administradora de bases de datos"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de SQL",
                lessons: [
                    {
                        id: "l1",
                        title: "Consultas básicas en SQL",
                        duration: 12,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
                    }
                ]
            }
        ],
        enrolledStudents: 1100,
        rating: 4.9
    },
    {
        id: "6",
        title: "Desarrollo de Aplicaciones con Flutter",
        description: "Crea apps móviles multiplataforma con Flutter y Dart.",
        subject: "Desarrollo Móvil",
        category: "Apps Móviles",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 44.99,
        level: "Intermedio",
        duration: 30,
        instructor: {
            name: "Carlos Gómez",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "5 años desarrollando apps con Flutter"
        },
        modules: [
            {
                id: "m1",
                title: "Introducción a Flutter",
                lessons: [
                    {
                        id: "l1",
                        title: "Configuración de Flutter y Dart",
                        duration: 15,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ&list=PLAWADOpEOsdGBc8tYyW_im4Fg5z1m6eZu"
                    }
                ]
            }
        ],
        enrolledStudents: 950,
        rating: 4.7
    },
    {
        id: "7",
        title: "Ciberseguridad para Principiantes",
        description: "Aprende los fundamentos de seguridad informática.",
        subject: "Seguridad",
        category: "Ciberseguridad",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 34.99,
        level: "Principiante",
        duration: 15,
        instructor: {
            name: "Laura Martínez",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "6 años como analista de seguridad"
        },
        modules: [
            {
                id: "m1",
                title: "Conceptos Básicos de Ciberseguridad",
                lessons: [
                    {
                        id: "l1",
                        title: "Principios de Seguridad Informática",
                        duration: 12,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ"
                    }
                ]
            }
        ],
        enrolledStudents: 800,
        rating: 4.6
    },
    {
        id: "8",
        title: "Inteligencia Artificial con Python",
        description: "Explora los fundamentos de la IA con Python.",
        subject: "Ciencia de Datos",
        category: "Inteligencia Artificial",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 59.99,
        level: "Avanzado",
        duration: 40,
        instructor: {
            name: "Santiago Ríos",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "10 años en desarrollo de IA"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de IA",
                lessons: [
                    {
                        id: "l1",
                        title: "Redes Neuronales y Machine Learning",
                        duration: 25,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ"
                    }
                ]
            }
        ],
        enrolledStudents: 600,
        rating: 4.8
    },
    {
        id: "9",
        title: "Diseño UX/UI para Principiantes",
        description: "Aprende a crear interfaces atractivas y funcionales.",
        subject: "Diseño",
        category: "UX/UI",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 22.99,
        level: "Principiante",
        duration: 12,
        instructor: {
            name: "Isabel Gómez",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "5 años como diseñadora UX/UI"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de UX/UI",
                lessons: [
                    {
                        id: "l1",
                        title: "Principios de Diseño de Interfaces",
                        duration: 10,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ"
                    }
                ]
            }
        ],
        enrolledStudents: 1300,
        rating: 4.5
    },
    {
        id: "10",
        title: "Automatización de Procesos con Python",
        description: "Aprende a automatizar tareas con Python y Selenium.",
        subject: "Programación",
        category: "Automatización",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 44.99,
        level: "Intermedio",
        duration: 20,
        instructor: {
            name: "Manuel Torres",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "8 años en automatización de procesos"
        },
        modules: [
            {
                id: "m1",
                title: "Automatización Básica",
                lessons: [
                    {
                        id: "l1",
                        title: "Introducción a Selenium",
                        duration: 15,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ"
                    }
                ]
            }
        ],
        enrolledStudents: 900,
        rating: 4.7
    },
    {
        id: "11",
        title: "JavaScript para Principiantes",
        description: "Aprende los fundamentos de JavaScript.",
        subject: "Programación",
        category: "Desarrollo Web",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 19.99,
        level: "Principiante",
        duration: 10,
        instructor: {
            name: "Ricardo Mendoza",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "5 años como ingeniero de software"
        },
        modules: [
            {
                id: "m1",
                title: "Introducción a JavaScript",
                lessons: [
                    {
                        id: "l1",
                        title: "¿Qué es JavaScript?",
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
        id: "12",
        title: "Desarrollo de Videojuegos con Unity",
        description: "Aprende a crear videojuegos con Unity y C#.",
        subject: "Desarrollo de Videojuegos",
        category: "Unity",
        image: "https://i.ytimg.com/vi/311M1woSkhw/maxresdefault.jpg",
        price: 49.99,
        level: "Avanzado",
        duration: 35,
        instructor: {
            name: "Andrea Ramírez",
            image: "https://img.freepik.com/foto-gratis/retrato-joven-profesor-dia-educacion_23-2150980043.jpg",
            experience: "7 años en desarrollo de videojuegos"
        },
        modules: [
            {
                id: "m1",
                title: "Fundamentos de Unity",
                lessons: [
                    {
                        id: "l1",
                        title: "Creación de un Juego en 2D",
                        duration: 20,
                        videoUrl: "https://www.youtube.com/watch?v=s43aiz5aNRQ"
                    }
                ]
            }
        ],
        enrolledStudents: 850,
        rating: 4.8
    },
];
