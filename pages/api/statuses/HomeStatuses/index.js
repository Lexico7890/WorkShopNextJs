const datos = [
    {
        name: "Camila Perea",
        avatar: "https://lh3.googleusercontent.com/proxy/J2Jt0praP4TKWpSYYyhI9V7pcght0vtKQHrHRPsf7AArql7yorYhokKOOMG4n-jS_SuHVYUPjuLa7ht0oFiZyZhfE_oi8CRqaR9o",
        message: "Lorem de Camila ipsum dolor sit amet consectetur adipisicing elit. Soluta magni aliquid eveniet maxime vel veniam! Tenetur nobis porro exercitationem vitae veniam numquam soluta voluptatum id cumque quibusdam. Praesentium, deleniti iure.",
    },
    {
        name: "Maria Camila Perea",
        avatar: "https://okdiario.com/img/2018/06/08/mujer-dominante-1-655x368.jpg",
        message: "Lorem de Mariaca ipsum dolor sit amet consectetur adipisicing elit. Soluta magni aliquid eveniet maxime vel veniam! Tenetur nobis porro exercitationem vitae veniam numquam soluta voluptatum id cumque quibusdam. Praesentium, deleniti iure.",
    },
    {
        name: "Danna Valeria Casas",
        avatar: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-600x400.jpg",
        message: "Lorem de Danna ipsum dolor sit amet consectetur adipisicing elit. Soluta magni aliquid eveniet maxime vel veniam! Tenetur nobis porro exercitationem vitae veniam numquam soluta voluptatum id cumque quibusdam. Praesentium, deleniti iure.",
    }
]

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(datos))
}