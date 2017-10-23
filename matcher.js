/**
 * matcher.js
 * A wrapper around a dictionary to simplify matching connections
 */
const { CONN_STATUS } = require('./constants')
const { WAITING, PAIRING } = CONN_STATUS;

class Matcher {
    constructor(setStatus) {
        this.connections = {}
        this._setStatus = setStatus;
    }

    // Add a new id into the connection pool
    connect(id) {
        // If id is empty, don't try to add it
        if (id === undefined || id === "") {
            return;
        }
        // If a connection with given id exists, don't try to add it
        if (this.connections[id] !== undefined) {
            return;
        }

        // Set the connection in the dictionary to null partner (single)
        this.connections[id] = {
            partner: null
        }
        console.log(`Matcher: Connected ${id}`)

        this._setStatus(id, WAITING);

        // Check if we can match a partner for the new connection
        this.checkForMatches(id);
        

        this.prettyPrint()
    }

    // Remove an id from the connection pool
    disconnect(id) {
        // Find the partner of the connected id, if it exists
        const { partner } = this.connections[id];

        // Delete the connection from the pool
        delete this.connections[id];
        console.log(`Matcher: Disconnected ${id}`)

        // If the partner existed, set it to single
        if (partner !== null) {
            this.connections[partner].partner = null; 
            console.log(`Matcher: ${id} partner ${partner} is now single`)

            this._setStatus(partner, WAITING)

            // Check for a partner for the newly single ex-partner
            this.checkForMatches(partner);
        }
        
        this._setStatus(id, WAITING);

        this.prettyPrint()
    }

    // Attempt to find new single match for given id
    checkForMatches(id) {
        // Make sure the id is a string
        id = id + "";

        // If the connection doesn't exist, don't do anything
        if (this.connections[id] === undefined) {
            // TODO: trying to find match for nonexistant connection
            return;
        }

        // If the connection has a partner, don't do anything
        if (this.connections[id].partner !== null) {
            // TODO: checking for match for a nonsingle id
            return;
        }
        console.log(`Matcher: Checking for matches for ${id}...`)

        // Iterate over all connections
        const ids = Object.keys(this.connections)
        const { length } = ids;
        for (let i = 0; i < length; i++) {
            const key = ids[i]
            // If we find an entry that's single and also not the given, connect
            if (
                key !== id &&
                this.connections[key].partner === null
            ) {
                this.setPartner(id, key);
                break;
            }
        }
    }

    // Set two ids to be each others' partners
    setPartner(id1, id2) {
        // If either is nonsingle, do nothing
        if (
            this.connections[id1].partner !== null ||
            this.connections[id2].partner !== null
        ) {
            // TODO: handle if you can't pair
            return;
        }
        console.log(`Matcher: Pairing ${id1} and ${id2}`)

        // Set each id's partner to the other
        this.connections[id1].partner = id2;
        this.connections[id2].partner = id1;

        this._setStatus(id1, PAIRING, id2);
        this._setStatus(id2, PAIRING, id1);
    }

    // Get the partner of a given id
    getPartner(id) {
        // If the given id doesn't exist, return null
        if (this.connections[id] === undefined) {
            // TODO: handle nonexistant id
            return null;
        }
        return this.connections[id].partner
    }

    // Utility function to print all connections
    prettyPrint() {
        const ids = Object.keys(this.connections)
        const { length } = ids;
        console.log('\n')
        for (let i = 0; i < length; i++) {
            const key = ids[i]
            const { partner } = this.connections[key];
            if (partner !== null) {
                console.log(`        ${key} <--> ${partner}`)
            } else {
                console.log(`        ${key} ----`)
            }
        } 
        console.log('\n')
    }
}

module.exports = Matcher