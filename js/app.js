const open = document.querySelector('.nav__toggle-open');
const close = document.querySelector('.nav__toggle-close');
const menu = document.querySelector('.navbar');

open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'inline-block';
    menu.style.display = 'inline-block';
});

close.addEventListener('click', () => {
    open.style.display = 'inline-block';
    close.style.display = 'none';
    menu.style.display = 'none';
});



const project = document.querySelector('.project');
const bookmark = document.querySelector('.button');
const bookmarkText = document.querySelector('.button-text');
const optionsButtons = document.querySelectorAll('.about__card__options__button');

// Agregar el modal de complete
// boton del modal complete

const modalProject = document.querySelector('.modal__project');
const modalClose = document.querySelector('.project__close__img');
const inputs = document.querySelectorAll('.option__radio');
const optionTitles = document.querySelectorAll('.option__h3');
// const pays = document.querySelectorAll('.pay');

project.addEventListener('click', () => {
    modalProject.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modalProject.style.display = 'none';
});

// Modificar el event y colocarlo en el div que contiene el logo y texto
bookmark.addEventListener('click', () => {
    if(bookmark.className === 'button'){
        bookmark.className = 'button-2';
        bookmarkText.className = 'button-text-2'
        bookmarkText.innerHTML = 'Bookmarked';
    } else {
        bookmark.className = 'button';
        bookmarkText.className = 'button-text'
        bookmarkText.innerHTML = 'Bookmark';
    }
});

// inputs.forEach(input => {
//     input.addEventListener('click', () => {
        
//         const pay = document.querySelector('.pay');
//         if(pay.className === 'pay'){
//             pay.className = 'pay-active';
//         } else {
//             pay.className = 'pay-active';
//         }
//     });
// });

optionsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Agregar modal complete que se muestre
    });
});

// boton modal complete addEventListener
// Cerrar el modal complete

inputs.forEach((btn) => {
    btn.addEventListener('click', () => {
        removeAllColorBorders();
        addColorBorders(btn);
    });
});

optionTitles.forEach((title) => {
    title.addEventListener('click', () => {
        if(!title.closest('.project__card').classList.contains('disabled')){
            let radioBtn = title
                .closest('.project__card')
                .querySelector('.option__radio');
            radioBtn.checked = true;
            removeAllColorBorders(heading);
            addColorBorders(heading);
        }
    });
});

const addColorBorders = (btn) => {
    const cardE1 = btn.closest('.project__card');
    cardE1.classList.add('project__card-2');

    if(!cardE1.classList.contains('no-reward')){
        addPleadgeForm(cardE1);
    }
};

const removeAllColorBorders = () => {
    inputElements = document.querySelectorAll('.enter-pledge');

    inputElements.forEach((element) => {
        element.remove();
    });

    const highlightEls = document.querySelectorAll(".project__card-2");

    highlightEls.forEach((element) => {
        element.classList.remove("project__card-2");
    });

};

const addPleadgeForm = (rootElement) => {
    const div = document.createElement('div');
    div.classList.add('enter-pledge');
    div.innerHTML = `
        <p>Enter your pledge</p>
        <div class="enter-group">
            <label class="input" for="radio-btn-2-id">
                <input
                class="input-pledge"
                type="number"
                id="radio-btn-2-id"
                name="stand-type"
                />
                <span class="dollar-sign">$</span>
            </label>
            <button class="btn">Continue</button>
        </div>
    `;
    rootElement.appendChild(div);

    const continueBtn = rootElement.querySelector('.btn');
    continueBtn.addEventListener('click', (event) => {
        const leftNumber = event.target
            .closest('.project__card')
            .querySelector('.left-number');
        let number = +leftNumber.innerHTML;
        leftNumber.innerHTML = --number;

        modalProject.style.display = 'none';
        modalComplete.classList.add('show'); //No creado, el modal complete
    });
};