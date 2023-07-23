# Tokopedia Play Clone
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis faucibus nibh et molestie. Fusce gravida pulvinar lorem eget tempor. Aliquam sit amet ligula non lacus convallis molestie a in quam.

## Database Structure
```mermaid
    erDiagram 
        videos {
            ObjectID _id
            string title
            string store
            string thumbnailUrl
            string videoUrl
            number totalView
            timestamp createdAt
            timestamp updatedAt
        }

        products {
            ObjectID _id
            ObjectID videoId
            string title
            string link
            string imageUrl
            number price
            timestamp createdAt
            timestamp updatedAt
        }

        comments {
            ObjectID _id
            ObjectID videoId
            string username
            string comment
            timestamp createdAt
            timestamp updatedAt
        }
```

## API Structure
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis faucibus nibh et molestie. Fusce gravida pulvinar lorem eget tempor. Aliquam sit amet ligula non lacus convallis molestie a in quam.

## Running Application
### Running direct via terminal
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis faucibus nibh et molestie. Fusce gravida pulvinar lorem eget tempor. Aliquam sit amet ligula non lacus convallis molestie a in quam.