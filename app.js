const projectData = {
    1: {
      title: "Casa Inteligente",
      description: "Casa que funciona con arduino con mas de 30 pines para controlar la casa mediante voz por un asistente llamado Rufino en el cual se controlaba (temperatura, abanico, focos, movimiento, cochera, regar plantas).",
      image: "./R.jpeg",
      link: "https://drive.google.com/file/d/1in8GSFZr7vBtXIAIWoWUEYBJyQ6YhMQj/view?usp=sharing"
    },
    2: {
      title: "Calculadora",
      description: "Calculadora basica hecha para android.",
      image: "./calcu.jpeg",
      link: "https://drive.google.com/drive/folders/1EwwtG3ynRwE8GxR2jC1JhSZK8vIchMYv?usp=sharing"
    },
    3: {
      title: "CRUD Entity Framework C# ",
      description: "Se elaboro un crud de una biblioteca implementando paquetes Nugets y Entity Framework",
      image: "./entity-framework-logo.jpg",
      link: "https://drive.google.com/file/d/1dxJKuP7bukhGcDnLCmLna11DzmrxfxCG/view?usp=sharing"
    },
    4: {
        title: "Pastillas Nexgard",
        description: "Pagina que permite la venta de pastillas para las garrapatas la cual contiene aun mas productos y esta trabajada con back y fronted para hacer cambios en tiempo real.",
        image: "./OIP (1).jpeg",
        link: "https://drive.google.com/drive/folders/1TJR9bUUU8JU-_YdEuQkCskOIIXenLl7I?usp=sharing"
      },
      5: {
        title: "Api de Cocketeles",
        description: "Pagina para ver recetas de cocketeles famosos ya sea  con acohol o sin alcohol mediante inormacion recibida por una api.",
        image: "./xd.png",
        link: "https://github.com/betuko37/apiCoktel"
      },
      6: {
        title: "CRUD de almacen en Java",
        description: "Proyecto escolar para saber administrar un almacen, clientes y producto vendido.",
        image: "./OIP (2).jpeg",
        link: "https://drive.google.com/file/d/1ySZfK6teyMGaeqCboESEIVApP-F27k8g/view?usp=sharing"
      }
  };

  document.querySelectorAll('.btn[data-toggle="modal"]').forEach(button => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const project = projectData[projectId];
      
      // Actualizar el contenido del modal
      document.getElementById('modalTitle').textContent = project.title;
      document.getElementById('modalDescription').textContent = project.description;
      document.getElementById('modalImage').src = project.image;
      document.getElementById('modalLink').href = project.link;
    });
  });
  