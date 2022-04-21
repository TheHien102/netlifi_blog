import {Component} from 'react'
import {attributes, react as HomeContent} from '../content/home.md';
// import avatar1 from '../public/img/Slime_Avatar.jpg';
import Image from 'next/image';

export default class Home extends Component {
    render() {
        let {title, date, cats, avatar} = attributes;
        return (
            <article>
                <h1>{title}</h1>
                <p>{date}</p>
                <HomeContent/>
                <ul>
                    {cats.map((cat, k) => (
                        <li key={k}>
                            <h2>{cat.name}</h2>
                            <p>{cat.description}</p>
                        </li>
                    ))}
                </ul>
                <Image src={avatar} alt={'avatar'} layOut={'fill'} width={500} height={500}/>
            </article>
        )
    }
}