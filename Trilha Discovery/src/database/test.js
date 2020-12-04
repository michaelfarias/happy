const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "PResalskdlkdlksdlasklkm",
        whatsapp: "78787",
        description: "Presta assistencia a crianças de 06 15 anos que  se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amos e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    });

    // consultar dados da tabela    
    await db.all("SELECT * FROM orphanages");

    // consultar somente 1 orphanato, pelo id
    await db.all('SELECT * FROM orphanages WHERE id = "0"');

    await db.run("DELETE FROM orphanages WHERE id = '4'");
});