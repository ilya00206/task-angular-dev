import { AnimalProfile } from './animal-profile.model';

export interface Animal {
  id: number;
  name: string;
  type: AnimalType;
  profileId: number;
  profile?: AnimalProfile;
}

export enum AnimalType {
  Dog = 'dog',
  Cat = 'cat',
  Elephant = 'elephant',
  Monkey = 'monkey',
  Parrot = 'parrot',
}

export function mapAnimalWithProfiles(
  animals: Animal[],
  profiles: AnimalProfile[],
) {
  return animals.map((animal) => ({
    ...animal,
    profile: profiles.find((profile) => profile.animalId === animal.id),
  }));
}
