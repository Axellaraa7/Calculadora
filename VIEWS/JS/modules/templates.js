const d = document,
  templates = d.createElement("template");

export default function loadTemplates() {
  loadTemplatesHTML();
}

async function loadTemplatesHTML() {
  const response = await fetch("templates.html");
  const data = await response.text();
  templates.innerHTML = data;
  loadTemplateInHTML("header", "headerTemplate");
  loadTemplateInTemplate("footerTemplate","contactanos","contactTemplate");
  loadTemplateInHTML("footer", "footerTemplate");
  loadTemplateInHTML("mainAside","slides");
  
}

function loadTemplateInHTML(sectionPrm, templatePrm) {
  let section = d.getElementById(sectionPrm),
    template = templates.content.getElementById(templatePrm),
    fragment = d.createDocumentFragment(),
    clone = document.importNode(template.content, true);

  //Sirve para no hacer muchas inserciones cuando se tiene un array de elementos.
  fragment.appendChild(clone);
  section.appendChild(fragment);
}

function loadTemplateInTemplate(receiverTemplate, idSection, originTemplate) {
  let section = templates.content.getElementById(receiverTemplate).content.getElementById(idSection),
    template = templates.content.getElementById(originTemplate),
    clone = document.importNode(template.content, true);
  section.appendChild(clone);
}
