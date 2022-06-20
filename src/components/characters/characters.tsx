import Image from 'next/image'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ICharacter } from '../../interfaces/characters'
import styles from './characters.module.css'

export default function Characters({ characters }: { characters: ICharacter[] }) {
  return (
    <div className={`${styles.characters}`}>
      {characters.map(character => {
        const { name, species, gender, image } = character
        return (
          <div key={uuidv4()} className={styles.card}>
            <div>
              <Image alt='avatar image' src={image} width={350} height={350} layout='fixed' />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.characterTitle}>{name}</h3>
              <p>{species}</p>
              <p>{gender}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
