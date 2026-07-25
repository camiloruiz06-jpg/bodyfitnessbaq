// Cómo se organiza el menú del panel (Studio)
export const deskStructure = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("⚙️ Configuración (WhatsApp, dirección, horarios)")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("anuncio").title("📢 Anuncios / Promos"),
      S.documentTypeListItem("plan").title("💲 Planes y precios"),
      S.documentTypeListItem("servicio").title("💪 Servicios"),
    ]);

// Documentos únicos (no se pueden crear/duplicar/borrar)
export const singletonTypes = new Set(["siteSettings"]);
