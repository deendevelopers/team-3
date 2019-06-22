`POST /settings`
`GET /settings`

```json
{
    "auth": { 
        // auth details 
    },
    "calendars": [
        {"id": 0 }
    ],
    "allocatedBlocks": {
        "dhuhr": {
            "time": 30000
        },
        //...
    },
    "options": {
        "outOfHours": true,
        "automatedRoomAllocation": true
    }
}
```