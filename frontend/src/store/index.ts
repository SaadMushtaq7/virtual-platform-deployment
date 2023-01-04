import { atom } from 'jotai'
import { postDataType } from '../dataTypes'

export const searchItem = atom('')

export const allPosts = atom<postDataType[]>([])
