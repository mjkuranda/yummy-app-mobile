import landingImage from './images/landing/soup_1920.jpg';
import fridgeImage from './images/landing/fridge_1920.jpg';
import dishesImage from './images/landing/dishes_1920.jpg';
import integrateImage from './images/landing/integrate_1920.jpg';
import yummyLogo from './images/yummy.png';
import noPhotoImage from './images/no-image.png';
import loadingImage from './images/loading.png';
import ukFlagImage from './images/uk.png';
import userImage from './images/user.png'; // https://www.pngegg.com/en/png-oouaw

import authorImage from '@/assets/images/dish-details/author.png';
import ingNotImage from '@/assets/images/dish-details/ing-not.png';
import ingYesImage from '@/assets/images/dish-details/ing-yes.png';
import providerImage from '@/assets/images/dish-details/provider.png';
import starEmptyImage from '@/assets/images/dish-details/star-empty.png';
import starHalfImage from '@/assets/images/dish-details/star-half.png';
import starFullImage from '@/assets/images/dish-details/star-full.png';
import timeImage from '@/assets/images/dish-details/time.png';

import categoriesJson from './data/categories.json';
import breadsJson from './data/ingredients/breads.json';
import dairyAndEggsJson from './data/ingredients/dairy-and-eggs.json';
import fishAndSeafoodJson from './data/ingredients/fish-and-seafood.json';
import fruitsJson from './data/ingredients/fruits.json';
import meatsJson from './data/ingredients/meats.json';
import mushroomsJson from './data/ingredients/mushrooms.json';
import oilsAndFatsJson from './data/ingredients/oils-and-fats.json';
import pastaJson from './data/ingredients/pasta.json';
import seedsAndNutsJson from './data/ingredients/seeds-and-nuts.json';
import spicesJson from './data/ingredients/spices.json';
import vegetablesJson from './data/ingredients/vegetables.json';

export const ingredientCategories = {
    'breads': breadsJson,
    'dairy-and-eggs': dairyAndEggsJson,
    'fish-and-seafood': fishAndSeafoodJson,
    'fruits': fruitsJson,
    'meats': meatsJson,
    'mushrooms': mushroomsJson,
    'oils-and-fats': oilsAndFatsJson,
    'pasta': pastaJson,
    'seeds-and-nuts': seedsAndNutsJson,
    'spices': spicesJson,
    'vegetables': vegetablesJson
};

export const dishDetailsImages = {
    authorImage,
    ingNotImage,
    ingYesImage,
    providerImage,
    starEmptyImage,
    starHalfImage,
    starFullImage,
    timeImage
};

export {
    landingImage,
    fridgeImage,
    dishesImage,
    integrateImage,
    yummyLogo,
    noPhotoImage,
    loadingImage,
    ukFlagImage,
    userImage,

    categoriesJson
};