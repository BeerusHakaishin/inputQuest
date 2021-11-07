export class Skill {
    public name: string;
    public image: string;
    public website: string;
    constructor(name: string, image: string, website: string) {
      (this.name = name), (this.image = image), (this.website = website);
    }
  }