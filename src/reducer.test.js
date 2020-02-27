import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants'

import * as reducers from './reducers';
import { exportAllDeclaration } from '@babel/types';

describe('searchRobots', () => {
    const initialStateSearch = {
        serchField:''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined,{})).toEqual({ searchField: '' })
    })
    it('should handle CHANGE_SEARCHFILED', () => {
        expect(reducers.searchRobots(undefined,{
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots)
    })
    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_PENDING,
        })).toEqual({
            isPending:true,
            robots:[],
            error:''
        })
    })
    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id: '123',
                name:'test',
                email:'test@gmail.com'
            }]
        })).toEqual({
            isPending:false,
            robots:[{
                id: '123',
                name:'test',
                email:'test@gmail.com'
            }],
            error:''
        })
    })
    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots,{
            type:REQUEST_ROBOTS_FAILED,
            payload:'NO!!!!!!'
        })).toEqual({
            isPending:false,
            robots:[],
            error:'NO!!!!!!'
        })
    })
})