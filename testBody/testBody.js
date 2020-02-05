import { threeSections } from '../data/alphabetData.js';

export function renderLink(singleSection){
    const nav = document.getElementById('nav');
    const link = document.createElement('a');
    console.log(link);
    nav.appendChild(link);
    link.classList.add('singleSection');
    link.textContent = singleSection.title;
    link.classList.add ('test');
    console.log(singleSection.title);
    link.href = '../game/?id=' + singleSection.id;
    console.log(singleSection.id);

    return link;

}
for (let i = 0; i < threeSections.length; i++){
    const singleSection = threeSections[i];
    console.log(singleSection);
    renderLink(singleSection);
}