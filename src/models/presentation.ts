export class Presentation {
  name: string
  email: string
  phoneNumber: number
  office: string
  manager: string
  orgUnit: string
  mainText: string
  gitHub: string
  twitter: string
  stackOverflow: string
  linkedIn: string
  imagePortraitUrl: string
  imageWallOfLeetUrl: string
  highlighted: boolean
  published: boolean

  constructor(name: string,
              email: string,
              phoneNumber: number,
              office: string,
              manager: string,
              orgUnit: string,
              mainText: string,
              gitHub: string,
              twitter: string,
              stackOverflow: string,
              linkedIn: string,
              imagePortraitUrl: string,
              imageWallOfLeetUrl: string,
              highlighted: boolean,
              published: boolean)
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