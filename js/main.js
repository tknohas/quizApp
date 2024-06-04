'use strict';

{
  function render(quiz) {
    const container = document.querySelector('.container');
    const dl = document.createElement('dl');
    const div = document.createElement('div');
    const dt = document.createElement('dt');
    dt.textContent = quiz[0];
    const dd = document.createElement('dd');
    const ul = document.createElement('ul');
    const liElements = Array.from({length: 3}, () => document.createElement('li'));

    for(let i = 0; i < liElements.length; i++) {
      liElements[i].textContent = quiz[i + 1];
      liElements[i].addEventListener('click', () => {
        if (quiz[4] === i) {
          liElements[i].classList.add('correct');
        } else {
          liElements[i].classList.add('incorrect');
        }
      })
    }
    
    container.appendChild(dl);
    dl.appendChild(div);
    div.appendChild(dt);
    div.appendChild(dd);
    dd.appendChild(ul);

    liElements.forEach((li) => {
      ul.appendChild(li);
    })
  }

  const quizzes = [
    ['ゼフが船長をしていた海賊団の名前は？', '赫足海賊団', 'クック海賊団', 'ルンバー海賊団', 1],
    ['魏軍の大将、ハクキサイを討ち取った武将は次のうち誰？', '信', 'オウセン', 'カンキ', 2],
    ['ルフィがアーロンを倒した技は何？', 'ゴムゴムの斧', 'ゴムゴムのロケット', 'ゴムゴムのガトリング', 0],
    // ['ルフィがアーロンを倒した技は何？', 'ゴムゴムの斧', 'ゴムゴムのロケット', 'ゴムゴムのガトリング', 0],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}
