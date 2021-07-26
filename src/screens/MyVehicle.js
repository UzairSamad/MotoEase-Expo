import React from "react";
import SearchableDropdown from "react-native-searchable-dropdown";
import db from "../db/00firebase";
import { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  View,
  TextInput,
  FlatList,
  Modal,
} from "react-native";
import CardV from "../components/CardV";
import Button from "../components/Button";
import colors from "../config/colors";

const items = [
  { id: 1, type: "Hatchback", name: "Maruti Suzuki 800 " },
  { id: 2, type: "Hatchback", name: "Maruti Suzuki A-Star " },
  { id: 3, type: "Hatchback", name: "Maruti Suzuki Alto " },
  { id: 4, type: "Hatchback", name: "Maruti Suzuki Alto 800 " },
  { id: 5, type: "Hatchback", name: "Maruti Suzuki Alto K10 " },
  { id: 6, type: "Hatchback", name: "Maruti Suzuki Baleno " },
  { id: 7, type: "Hatchback", name: "Maruti Suzuki Celerio " },
  { id: 8, type: "Sedan", name: "Maruti Suzuki Ciaz " },
  { id: 9, type: "Hatchback", name: "Maruti Suzuki Eeco " },
  { id: 10, type: "MUV", name: "Maruti Suzuki Ertiga " },
  { id: 11, type: "Sedan", name: "Maruti Suzuki Esteem " },
  { id: 12, type: "Hatchback", name: "Maruti Suzuki Estilo " },
  { id: 13, type: "MUV", name: "Maruti Suzuki Grand Vitara " },
  { id: 14, type: "MUV", name: "Maruti Suzuki Gypsy " },
  { id: 15, type: "Hatchback", name: "Maruti Suzuki Ignis " },
  { id: 16, type: "Sedan", name: "Maruti Suzuki Kizashi " },
  { id: 17, type: "Hatchback", name: "Maruti Suzuki Omni " },
  { id: 18, type: "Hatchback", name: "Maruti Suzuki Ritz " },
  { id: 19, type: "Hatchback", name: "Maruti Suzuki S-Cross " },
  { id: 20, type: "Hatchback", name: "Maruti Suzuki S-Presso " },
  { id: 21, type: "Hatchback", name: "Maruti Suzuki Swift " },
  { id: 22, type: "Sedan", name: "Maruti Suzuki Swift Dzire " },
  { id: 23, type: "Sedan", name: "Maruti Suzuki SX4 " },
  { id: 24, type: "Hatchback", name: "Maruti Suzuki Versa " },
  { id: 25, type: "Hatchback", name: "Maruti Suzuki Vitara Brezza " },
  { id: 26, type: "Hatchback", name: "Maruti Suzuki WagonR " },
  { id: 27, type: "MUV", name: "Maruti Suzuki XL6 " },
  { id: 28, type: "Hatchback", name: "Maruti Suzuki Zen " },
  { id: 29, type: "Sedan", name: "Hyundai Accent " },
  { id: 30, type: "Sedan", name: "Hyundai Accent Viva " },
  { id: 31, type: "Sedan", name: "Hyundai Aura " },
  { id: 32, type: "MUV", name: "Hyundai Creta " },
  { id: 33, type: "Sedan", name: "Hyundai Elantra " },
  { id: 34, type: "Hatchback", name: "Hyundai Elite i20 " },
  { id: 35, type: "Hatchback", name: "Hyundai Eon " },
  { id: 36, type: "Hatchback", name: "Hyundai Getz " },
  { id: 37, type: "Hatchback", name: "Hyundai Getz Prime " },
  { id: 38, type: "Hatchback", name: "Hyundai Grand i10 " },
  { id: 39, type: "Hatchback", name: "Hyundai Grand i10 Nios " },
  { id: 40, type: "Hatchback", name: "Hyundai i10 " },
  { id: 41, type: "Hatchback", name: "Hyundai i20 " },
  { id: 42, type: "Hatchback", name: "Hyundai i20 Active " },
  { id: 43, type: "MUV", name: "Hyundai SantaFE " },
  { id: 44, type: "Hatchback", name: "Hyundai Santro " },
  { id: 45, type: "Hatchback", name: "Hyundai Santro Xing " },
  { id: 46, type: "Sedan", name: "Hyundai Sonata " },
  { id: 47, type: "Sedan", name: "Hyundai Sonata Embera " },
  { id: 48, type: "Sedan", name: "Hyundai Sonata Transform " },
  { id: 49, type: "MUV", name: "Hyundai Tucson " },
  { id: 50, type: "MUV", name: "Hyundai Vanue " },
  { id: 51, type: "Sedan", name: "Hyundai Verna " },
  { id: 52, type: "Sedan", name: "Hyundai Verna Fludic " },
  { id: 53, type: "Sedan", name: "Hyundai Verna Transform " },
  { id: 54, type: "Hatchback", name: "Hyundai Xcent " },
  { id: 55, type: "Sedan", name: "Honda Accord " },
  { id: 56, type: "Sedan", name: "Honda Accord Hybrid " },
  { id: 57, type: "Sedan", name: "Honda Amaze " },
  { id: 58, type: "Hatchback", name: "Honda Brio " },
  { id: 59, type: "MUV", name: "Honda BRV " },
  { id: 60, type: "Sedan", name: "Honda City " },
  { id: 61, type: "Sedan", name: "Honda City IDTEC " },
  { id: 62, type: "Sedan", name: "Honda City IVTEC " },
  { id: 63, type: "Sedan", name: "Honda City ZX " },
  { id: 64, type: "Sedan", name: "Honda Civic " },
  { id: 65, type: "MUV", name: "Honda CRV " },
  { id: 66, type: "Hatchback", name: "Honda Jazz " },
  { id: 67, type: "MUV", name: "Honda Mobilio " },
  { id: 68, type: "Hatchback", name: "Honda WRV " },
  { id: 69, type: "Hatchback", name: "Tata Altroz " },
  { id: 70, type: "MUV", name: "Tata Aria " },
  { id: 71, type: "Hatchback", name: "Tata Bolt " },
  { id: 72, type: "MUV", name: "Tata Harrier " },
  { id: 73, type: "MUV", name: "Tata Hexa " },
  { id: 74, type: "Hatchback", name: "Tata Indica " },
  { id: 75, type: "Hatchback", name: "Tata Indica eV2 " },
  { id: 76, type: "Hatchback", name: "Tata Indica V2 " },
  { id: 77, type: "Hatchback", name: "Tata Indica Vista " },
  { id: 78, type: "Hatchback", name: "Tata Indigo " },
  { id: 79, type: "Hatchback", name: "Tata Indigo CS " },
  { id: 80, type: "Hatchback", name: "Tata Indigo eCS " },
  { id: 81, type: "MUV", name: "Tata Indigo Marina " },
  { id: 82, type: "Sedan", name: "Tata Indigo XL " },
  { id: 83, type: "Sedan", name: "Tata Manza " },
  { id: 84, type: "Hatchback", name: "Tata Nano " },
  { id: 85, type: "Hatchback", name: "Tata Nano Genx " },
  { id: 86, type: "Hatchback", name: "Tata Nexon " },
  { id: 87, type: "MUV", name: "Tata Safari " },
  { id: 88, type: "MUV", name: "Tata Safari Storme " },
  { id: 89, type: "MUV", name: "Tata Sumo Gold " },
  { id: 90, type: "MUV", name: "Tata Sumo Grande " },
  { id: 91, type: "MUV", name: "Tata Sumo Grande MK II " },
  { id: 92, type: "MUV", name: "Tata Sumo Space " },
  { id: 93, type: "MUV", name: "Tata Sumo Victa " },
  { id: 94, type: "Hatchback", name: "Tata Tiago " },
  { id: 95, type: "Hatchback", name: "Tata Tigor " },
  { id: 96, type: "MUV", name: "Tata Venture " },
  { id: 97, type: "MUV", name: "Tata Winger " },
  { id: 98, type: "MUV", name: "Tata Xenon " },
  { id: 99, type: "Hatchback", name: "Tata Zest " },
  { id: 100, type: "Hatchback", name: "Ford Eco Sport " },
  { id: 101, type: "Luxury", name: "Ford Endeavour " },
  { id: 102, type: "Sedan", name: "Ford Escort " },
  { id: 103, type: "Sedan", name: "Ford Fiesta " },
  { id: 104, type: "Sedan", name: "Ford Fiesta Classic " },
  { id: 105, type: "Hatchback", name: "Ford Figo " },
  { id: 106, type: "Sedan", name: "Ford Figo Aspire " },
  { id: 107, type: "Hatchback", name: "Ford Freestyle " },
  { id: 108, type: "MUV", name: "Ford Fusion " },
  { id: 109, type: "Sedan", name: "Ford Ikon " },
  { id: 110, type: "Sedan", name: "Ford Mondeo " },
  { id: 111, type: "Luxury", name: "Ford Mustang " },
  { id: 112, type: "Sedan", name: "Volkswagen Ameo " },
  { id: 113, type: "Hatchback", name: "Volkswagen Beetle " },
  { id: 114, type: "Hatchback", name: "Volkswagen Cross Polo " },
  { id: 115, type: "Sedan", name: "Volkswagen Jetta " },
  { id: 116, type: "Luxury", name: "Volkswagen Passat " },
  { id: 117, type: "Hatchback", name: "Volkswagen Polo " },
  { id: 118, type: "MUV", name: "Volkswagen Tiguan " },
  { id: 119, type: "Sedan", name: "Volkswagen Vento " },
  { id: 120, type: "Hatchback", name: "Chevrolet Aveo " },
  { id: 121, type: "Hatchback", name: "Chevrolet Aveo U-VA " },
  { id: 122, type: "Hatchback", name: "Chevrolet Beat " },
  { id: 123, type: "MUV", name: "Chevrolet Captiva " },
  { id: 124, type: "Luxury", name: "Chevrolet Corvette " },
  { id: 125, type: "Sedan", name: "Chevrolet Cruze " },
  { id: 126, type: "MUV", name: "Chevrolet Enjoy " },
  { id: 127, type: "MUV", name: "Chevrolet Forester " },
  { id: 128, type: "Sedan", name: "Chevrolet Optra " },
  { id: 129, type: "Sedan", name: "Chevrolet Optra Magnum " },
  { id: 130, type: "Hatchback", name: "Chevrolet Optra SRV " },
  { id: 131, type: "Sedan", name: "Chevrolet Sail " },
  { id: 132, type: "Hatchback", name: "Chevrolet Sail Hatchback" },
  { id: 133, type: "MUV", name: "Chevrolet Silverado " },
  { id: 134, type: "Hatchback", name: "Chevrolet Spark " },
  { id: 135, type: "MUV", name: "Chevrolet Tavera " },
  { id: 136, type: "MUV", name: "Chevrolet Trailblazer " },
  { id: 137, type: "Luxury", name: "Mahindra Alturas " },
  { id: 138, type: "MUV", name: "Mahindra Bolero " },
  { id: 139, type: "MUV", name: "Mahindra Bolero Camper " },
  { id: 140, type: "MUV", name: "Mahindra Bolero Pickup " },
  { id: 141, type: "Hatchback", name: "Mahindra E20 Plus " },
  { id: 142, type: "Hatchback", name: "Mahindra KUV 100 " },
  { id: 143, type: "Sedan", name: "Mahindra Logan " },
  { id: 144, type: "MUV", name: "Mahindra Marazzo " },
  { id: 145, type: "Hatchback", name: "Mahindra Nuvo Sport " },
  { id: 146, type: "Hatchback", name: "Mahindra Quanto " },
  { id: 147, type: "MUV", name: "Mahindra Scorpio " },
  { id: 148, type: "MUV", name: "Mahindra Scorpio Getaway " },
  { id: 149, type: "MUV", name: "Mahindra Thar " },
  { id: 150, type: "MUV", name: "Mahindra TUV 300 " },
  { id: 151, type: "Sedan", name: "Mahindra Varito " },
  { id: 152, type: "Hatchback", name: "Mahindra Varito Vibe CS " },
  { id: 153, type: "MUV", name: "Mahindra XUV 300 " },
  { id: 154, type: "MUV", name: "Mahindra XUV 500 " },
  { id: 155, type: "MUV", name: "Mahindra Xylo " },
  { id: 156, type: "Sedan", name: "Toyota Camry " },
  { id: 157, type: "Sedan", name: "Toyota Corolla " },
  { id: 158, type: "Sedan", name: "Toyota Corolla Altis " },
  { id: 159, type: "Hatchback", name: "Toyota Etios " },
  { id: 160, type: "Hatchback", name: "Toyota Etios Cross " },
  { id: 161, type: "Hatchback", name: "Toyota Etios Liva " },
  { id: 162, type: "MUV", name: "Toyota Fortuner " },
  { id: 163, type: "Hatchback", name: "Toyota Glanza " },
  { id: 164, type: "MUV", name: "Toyota Innova " },
  { id: 165, type: "MUV", name: "Toyota Innova Crysta " },
  { id: 166, type: "Luxury", name: "Toyota Land Cruiser " },
  { id: 167, type: "Luxury", name: "Toyota Land Cruiser Prado " },
  { id: 168, type: "MUV", name: "Toyota Qualis " },
  { id: 169, type: "Sedan", name: "Toyota Yaris " },
  { id: 170, type: "Hatchback", name: "Renault Captur " },
  { id: 171, type: "Hatchback", name: "Renault Duster " },
  { id: 172, type: "Sedan", name: "Renault Fluence " },
  { id: 173, type: "MUV", name: "Renault Koleos " },
  { id: 174, type: "Hatchback", name: "Renault Kwid " },
  { id: 175, type: "MUV", name: "Renault Lodgy " },
  { id: 176, type: "Hatchback", name: "Renault Pulse " },
  { id: 177, type: "Sedan", name: "Renault Scala " },
  { id: 178, type: "MUV", name: "Renault Triber " },
  { id: 179, type: "Hatchback", name: "Skoda Fabia " },
  { id: 180, type: "Hatchback", name: "Skoda Fabia Scout " },
  { id: 181, type: "Luxury", name: "Skoda Kodiaq " },
  { id: 182, type: "Sedan", name: "Skoda Laura " },
  { id: 183, type: "Sedan", name: "Skoda Octavia " },
  { id: 184, type: "Sedan", name: "Skoda Rapid " },
  { id: 185, type: "Sedan", name: "Skoda Superb " },
  { id: 186, type: "MUV", name: "Skoda Yeti " },
  { id: 187, type: "MUV", name: "Nissan Evalia " },
  { id: 188, type: "Luxury", name: "Nissan GTR " },
  { id: 189, type: "Hatchback", name: "Nissan Kicks " },
  { id: 190, type: "Hatchback", name: "Nissan Micra " },
  { id: 191, type: "Hatchback", name: "Nissan Micra Active " },
  { id: 192, type: "Sedan", name: "Nissan Sunny " },
  { id: 193, type: "Sedan", name: "Nissan Teana " },
  { id: 194, type: "MUV", name: "Nissan Terrano " },
  { id: 195, type: "MUV", name: "Nissan X-Trail " },
  { id: 196, type: "Hatchback", name: "Fiat Abarth Punto " },
  { id: 197, type: "Hatchback", name: "Fiat Adventure " },
  { id: 198, type: "Hatchback", name: "Fiat Avventura " },
  { id: 199, type: "Sedan", name: "Fiat Linea " },
  { id: 200, type: "Sedan", name: "Fiat Linea Classic " },
  { id: 201, type: "Hatchback", name: "Fiat Palio D " },
  { id: 202, type: "Hatchback", name: "Fiat Palio Stile " },
  { id: 203, type: "Sedan", name: "Fiat Petra " },
  { id: 204, type: "Hatchback", name: "Fiat Punto " },
  { id: 205, type: "Hatchback", name: "Fiat Punto Evo " },
  { id: 206, type: "Hatchback", name: "Fiat Uno " },
  { id: 207, type: "Hatchback", name: "Fiat Urban Cross " },
  { id: 208, type: "Luxury", name: "Aston Martin DB11 " },
  { id: 209, type: "Luxury", name: "Aston Martin DB9 " },
  { id: 210, type: "Luxury", name: "Aston Martin DBX " },
  { id: 211, type: "Luxury", name: "Aston Martin Rapide " },
  { id: 212, type: "Luxury", name: "Aston Martin Vanquish " },
  { id: 213, type: "Luxury", name: "Aston Martin Vantage " },
  { id: 214, type: "Luxury", name: "Mini Clubman " },
  { id: 215, type: "Luxury", name: "Mini Cooper " },
  { id: 216, type: "Luxury", name: "Mini Countryman " },
  { id: 217, type: "Luxury", name: "Bentley Continental " },
  { id: 218, type: "Luxury", name: "Bentley Flying Spur " },
  { id: 219, type: "Luxury", name: "Bentley Mulsanne " },
  { id: 220, type: "Luxury", name: "Rolls Royce Ghost " },
  { id: 221, type: "Luxury", name: "Rolls Royce Phantom " },
  { id: 222, type: "Luxury", name: "Rolls Royce Wraith " },
  { id: 223, type: "Luxury", name: "BMW 2 Series Gran Coupe " },
  { id: 224, type: "Luxury", name: "BMW 3 Series " },
  { id: 225, type: "Luxury", name: "BMW 3 Series Gran Limousine " },
  { id: 226, type: "Luxury", name: "BMW 5 Series " },
  { id: 227, type: "Luxury", name: "BMW 6 Series GT " },
  { id: 228, type: "Luxury", name: "BMW 7 Series " },
  { id: 229, type: "Luxury", name: "BMW 8 Series " },
  { id: 230, type: "Luxury", name: "BMW M2 " },
  { id: 231, type: "Luxury", name: "BMW M5 " },
  { id: 232, type: "Luxury", name: "BMW M5 Facelift " },
  { id: 233, type: "Luxury", name: "BMW M8 " },
  { id: 234, type: "Luxury", name: "BMW X1 " },
  { id: 235, type: "Luxury", name: "BMW X3 M " },
  { id: 236, type: "Luxury", name: "BMW X4 " },
  { id: 237, type: "Luxury", name: "BMW X5 " },
  { id: 238, type: "Luxury", name: "BMW X5 M " },
  { id: 239, type: "Luxury", name: "BMW X6 " },
  { id: 240, type: "Luxury", name: "BMW X7 " },
  { id: 241, type: "Luxury", name: "BMW X8 " },
  { id: 242, type: "Luxury", name: "BMW Z4 " },
  { id: 243, type: "Hatchback", name: "Datsun GO " },
  { id: 244, type: "MUV", name: "Datsun GO Plus " },
  { id: 245, type: "Hatchback", name: "Datsun Redi Go " },
  { id: 246, type: "Luxury", name: "Audi A3 " },
  { id: 247, type: "Luxury", name: "Audi A4 " },
  { id: 248, type: "Luxury", name: "Audi A6 " },
  { id: 249, type: "Luxury", name: "Audi A7 " },
  { id: 250, type: "Luxury", name: "Audi A8 " },
  { id: 251, type: "Luxury", name: "Audi A8 L " },
  { id: 252, type: "Luxury", name: "Audi Q3 " },
  { id: 253, type: "Luxury", name: "Audi Q5 " },
  { id: 254, type: "Luxury", name: "Audi Q7 " },
  { id: 255, type: "Luxury", name: "Audi Q8 " },
  { id: 256, type: "Luxury", name: "Audi R8 " },
  { id: 257, type: "Luxury", name: "Audi RS3 " },
  { id: 258, type: "Luxury", name: "Audi RS5 " },
  { id: 259, type: "Luxury", name: "Audi RS7 " },
  { id: 260, type: "Luxury", name: "Audi TT " },
  { id: 261, type: "Luxury", name: "Mercedes A-Class " },
  { id: 262, type: "Luxury", name: "Mercedes AMG GT " },
  { id: 263, type: "Luxury", name: "Mercedes B-Class " },
  { id: 264, type: "Luxury", name: "Mercedes C-Class " },
  { id: 265, type: "Luxury", name: "Mercedes CLA Class " },
  { id: 266, type: "Luxury", name: "Mercedes CLS Class " },
  { id: 267, type: "Luxury", name: "Mercedes E-Class " },
  { id: 268, type: "Luxury", name: "Mercedes G63 AMG " },
  { id: 269, type: "Luxury", name: "Mercedes GL Class " },
  { id: 270, type: "Luxury", name: "Mercedes GLA Class " },
  { id: 271, type: "Luxury", name: "Mercedes GLE Class " },
  { id: 272, type: "Luxury", name: "Mercedes ML Class " },
  { id: 273, type: "Luxury", name: "Mercedes R Class " },
  { id: 274, type: "Luxury", name: "Mercedes S-Class " },
  { id: 275, type: "Luxury", name: "Mercedes SL 500 AMG " },
  { id: 276, type: "Luxury", name: "Mercedes SLK Class " },
  { id: 277, type: "Luxury", name: "Mitsubishi Cedia " },
  { id: 278, type: "Luxury", name: "Mitsubishi Lancer " },
  { id: 279, type: "Luxury", name: "Mitsubishi Montero " },
  { id: 280, type: "Luxury", name: "Mitsubishi Outlander " },
  { id: 281, type: "Luxury", name: "Mitsubishi Pajero " },
  { id: 282, type: "Luxury", name: "Mitsubishi Pajero Sport " },
  { id: 283, type: "MUV", name: "Kia Carnival " },
  { id: 284, type: "MUV", name: "Kia Seltos " },
  { id: 285, type: "MUV", name: "Kia Sonet " },
  { id: 286, type: "Luxury", name: "Land Rover Discovery 4 " },
  { id: 287, type: "Luxury", name: "Land Rover Discovery Sport " },
  { id: 288, type: "Luxury", name: "Land Rover Freelander 2 " },
  { id: 289, type: "Luxury", name: "Land Rover Range Rover " },
  { id: 290, type: "Luxury", name: "Land Rover Range Rover Evoque " },
  { id: 291, type: "Luxury", name: "Land Rover Range Rover Sport " },
  { id: 292, type: "Luxury", name: "Land Rover Range Rover Velar " },
  { id: 293, type: "Luxury", name: "Land Rover Range Rover Vogue " },
  { id: 294, type: "MUV", name: "Jeep Compass " },
  { id: 295, type: "Luxury", name: "Jaguar F Pace " },
  { id: 296, type: "Luxury", name: "Jaguar F Type " },
  { id: 297, type: "Luxury", name: "Jaguar XE " },
  { id: 298, type: "Luxury", name: "Jaguar XF " },
  { id: 299, type: "Luxury", name: "Jaguar XJ " },
  { id: 300, type: "MUV", name: "SSangYong Rexton " },
  { id: 301, type: "Luxury", name: "Lamborghini Aventador " },
  { id: 302, type: "Luxury", name: "Lamborghini Gallardo " },
  { id: 303, type: "Luxury", name: "Lamborghini Huracan " },
  { id: 304, type: "Luxury", name: "Volvo S40 " },
  { id: 305, type: "Luxury", name: "Volvo S60 " },
  { id: 306, type: "Luxury", name: "Volvo S60 Cross Country " },
  { id: 307, type: "Luxury", name: "Volvo S80 " },
  { id: 308, type: "Luxury", name: "Volvo S90 " },
  { id: 309, type: "Luxury", name: "Volvo V40 " },
  { id: 310, type: "Luxury", name: "Volvo V40 Cross Country " },
  { id: 311, type: "Luxury", name: "Volvo V60 " },
  { id: 312, type: "Luxury", name: "Volvo V90 " },
  { id: 313, type: "Luxury", name: "Volvo XC 40 " },
  { id: 314, type: "Luxury", name: "Volvo XC60 " },
  { id: 315, type: "Luxury", name: "Volvo XC90 " },
  { id: 316, type: "Hatchback", name: "Opal Astra " },
  { id: 317, type: "Sedan", name: "Opal Corsa " },
  { id: 318, type: "MUV", name: "Isuzu Dmax V Cross " },
  { id: 319, type: "MUV", name: "Isuzu MU7 " },
  { id: 320, type: "Sedan", name: "Hindustan Motors Ambassador " },
  { id: 321, type: "Sedan", name: "Daewoo Cielo " },
  { id: 322, type: "Hatchback", name: "Daewoo Matiz " },
  { id: 323, type: "Sedan", name: "Daewoo Nexia " },
  { id: 324, type: "Luxury", name: "Ferrari 488 " },
  { id: 325, type: "Luxury", name: "Ferrari 458 Italia " },
  { id: 326, type: "Luxury", name: "Ferrari 458 Speciale " },
  { id: 327, type: "Luxury", name: "Ferrari California " },
  { id: 328, type: "Luxury", name: "Ferrari F12 Berlinetta " },
  { id: 329, type: "Luxury", name: "Ferrari FF " },
  { id: 330, type: "Luxury", name: "Porsche 911 " },
  { id: 331, type: "Luxury", name: "Porsche Boxter " },
  { id: 332, type: "Luxury", name: "Porsche Cayenne " },
  { id: 333, type: "Luxury", name: "Porsche Cayman " },
  { id: 334, type: "Luxury", name: "Porsche Macan " },
  { id: 335, type: "Luxury", name: "Porsche Panamera " },
  { id: 336, type: "MUV", name: "Force Gurkha " },
  { id: 337, type: "MUV", name: "Force One " },
  { id: 338, type: "MUV", name: "Force Traveller 3350 " },
  { id: 339, type: "MUV", name: "Force Trax " },
  { id: 340, type: "MUV", name: "MG Gloster " },
  { id: 341, type: "MUV", name: "MG Hector " },
  { id: 342, type: "Luxury", name: "Maserati Ghibli " },
  { id: 343, type: "Luxury", name: "Maserati Gran Cabrio " },
  { id: 344, type: "Luxury", name: "Maserati Gran Turismo " },
  { id: 345, type: "Luxury", name: "Maserati Quattroporte " },
  { id: 346, type: "Luxury", name: "DC Avanti " },
];
const years = [
  { id: 1, name: "2021" },
  { id: 2, name: "2020" },
  { id: 3, name: "2019" },
  { id: 4, name: "2018" },
  { id: 5, name: "2017" },
  { id: 6, name: "2016" },
  { id: 7, name: "2015" },
  { id: 8, name: "2014" },
  { id: 9, name: "2013" },
  { id: 10, name: "2012" },
  { id: 11, name: "2011" },
  { id: 12, name: "2010" },
  { id: 13, name: "2009" },
  { id: 14, name: "2008" },
  { id: 15, name: "2007" },
  { id: 16, name: "2006" },
  { id: 17, name: "2005" },
  { id: 18, name: "Older" },
];
const fuels = [
  { id: 1, name: "Petrol" },
  { id: 2, name: "Diesel" },
  { id: 3, name: "CNG" },
];

export default function MyVehicle({ navigation, route }) {
  const userId = route.params.userId;
  const mobile = route.params.mobile;
  const [vehicle, setVehicle] = useState();
  const [year, setYear] = useState();
  const [fuel, setFuel] = useState();
  const [num, setNum] = useState();
  const [mdVisible, setMdVisible] = useState(false);
  const VehicleRef = db
    .collection("User")
    .doc(userId)
    .collection("MyVehicle");

  const callfunctiontopopulateFlatList = () => {
    var newArray = [];

    VehicleRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          newArray.push(documentSnapshot.data());
        });
      })
      .then((testing) => {
        setExampleState(newArray);
      });
  };
  const [exampleState, setExampleState] = useState(
    callfunctiontopopulateFlatList
  );

  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{ height: "88%", backgroundColor: colors.primary }}>
          <Text
            style={{
              paddingTop: "10%",
              fontSize: 25,
              marginLeft: 20,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            My Vehicles
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
              marginTop: 5,
              fontWeight: "600",
              paddingBottom: 5,
              color: "#fff",
            }}
          >
            (click on vehicle to select)
          </Text>

          <FlatList
            ListEmptyComponent={
              <Text
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  fontSize: 20,
                  fontWeight: "500",
                  marginTop: "20%",
                }}
              >
                No Vehicle Added
              </Text>
            }
            style={{ padding: 10, backgroundColor: "#d3d3d3" }}
            data={exampleState}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <CardV
                title={item.title}
                sub={item.sub}
                ssub={item.ssub}
                num={item.num}
                onPress={() => {
                  navigation.navigate("Services", {
                    item,
                    userId: userId,
                    mobile: mobile,
                  });
                }}
              />
            )}
          />
        </View>
        <Button
          title="Add New Vehicle"
          onPress={() => setMdVisible(true)}
          color="primary"
        />
      </View>

      <Modal backgroundColor="white" visible={mdVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={{ marginTop: "25%", marginBottom: "10%" }}>
              <Text style={styles.headingText}>Select your Vehicle</Text>
              <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                selectedItems={vehicle}
                onItemSelect={(item) => setVehicle(item)}
                containerStyle={styles.containerStyle}
                textInputStyle={styles.textInputStyle}
                itemStyle={styles.itemStyle}
                itemTextStyle={styles.itemTextStyle}
                itemsContainerStyle={styles.itemsContainerStyle}
                items={items}
                placeholder="eg: XUV 500"
                resetValue={false}
              />

              <Text style={styles.headingText}>Select Fuel Type</Text>
              <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                selectedItems={fuel}
                onItemSelect={(fuel) => setFuel(fuel)}
                containerStyle={styles.containerStyle}
                textInputStyle={styles.textInputStyle}
                itemStyle={styles.itemStyle}
                itemTextStyle={styles.itemTextStyle}
                itemsContainerStyle={styles.itemsContainerStyle}
                items={fuels}
                defaultIndex={"eg: Petrol"}
                placeholder="eg: Petrol"
                resetValue={false}
              />

              <Text style={styles.headingText}>Year of Purchase</Text>
              <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                selectedItems={year}
                onItemSelect={(year) => setYear(year)}
                containerStyle={styles.containerStyle}
                textInputStyle={styles.textInputStyle}
                itemStyle={styles.itemStyle}
                itemTextStyle={styles.itemTextStyle}
                itemsContainerStyle={styles.itemsContainerStyle}
                items={years}
                defaultIndex={"eg:2021"}
                placeholder="eg:2021"
                resetValue={false}
              />
              <Text style={styles.headingText}>Vehicle No.</Text>
              <TextInput
                style={[styles.textInputStyle, { marginBottom: "10%" }]}
                placeholder="Enter Number Here"
                onChangeText={(numb) => {
                  setNum(numb);
                }}
                value={num}
              />
              <Button
                title="Add Vehicle"
                onPress={() => {
                  if (
                    vehicle == null ||
                    fuel == null ||
                    year == null ||
                    num == null
                  ) {
                    alert("Please add full details");

                    return;
                  }
                  {
                    VehicleRef.doc(num).set({
                      title: vehicle.name,
                      type: vehicle.type,
                      sub: fuel.name,
                      ssub: year.name,
                      num: num,
                      key: num,
                    });
                    var newArray = [];
                    db.collection("User")
                      .doc(userId)
                      .collection("MyVehicle")
                      .get()
                      .then((querySnapshot) => {
                        querySnapshot.forEach((documentSnapshot) => {
                          newArray.push(documentSnapshot.data());
                        });
                      })
                      .then((testing) => {
                        setExampleState(newArray);
                      });
                  }
                  setMdVisible(false);
                }}
              />
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Close"
                  onPress={() => {
                    setMdVisible(false);
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },

  headingText: {
    padding: 10,
    fontSize: 16,
    fontWeight: "500",
  },

  TOtext: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textInputStyle: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#FAF7F6",
  },
  itemStyle: {
    padding: 8,
    marginTop: 2,
    backgroundColor: "#FAF9F8",
    borderColor: "#bbb",
    borderWidth: 1,
  },
  itemTextStyle: { color: "#100" },
  itemsContainerStyle: { maxHeight: 100 },
  containerStyle: { padding: 1 },
});
