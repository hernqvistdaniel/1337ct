export class Presentation {
  name: String
  email: String
  phoneNumber: Number
  office: String
  manager: String
  orgUnit: String
  mainText: String
  gitHub: String
  twitter: String
  stackOverflow: String
  linkedIn: String
  imagePortraitUrl: String
  imageWallOfLeetUrl: String
  highlighted: Boolean
  published: Boolean

  constructor(name: String,
              email: String,
              phoneNumber: Number,
              office: String,
              manager: String,
              orgUnit: String,
              mainText: String,
              gitHub: String,
              twitter: String,
              stackOverflow: String,
              linkedIn: String,
              imagePortraitUrl: String,
              imageWallOfLeetUrl: String,
              highlighted: Boolean,
              published: Boolean)
  {
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
    this.office = office
    this.manager = manager
    this.orgUnit = orgUnit
    this.mainText = mainText
    this.gitHub = gitHub
    this.twitter = twitter
    this.stackOverflow = stackOverflow
    this.linkedIn = linkedIn
    this.imagePortraitUrl = imagePortraitUrl
    this.imageWallOfLeetUrl = imageWallOfLeetUrl
    this.highlighted = highlighted
    this.published = published
 }
}