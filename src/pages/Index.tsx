import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  const categories = {
    "Кровельные материалы": {
      "Металлочерепица": ["Классик", "Монтеррей", "Каскад"],
      "Гибкая черепица": ["Стандарт", "Премиум", "Элит"],
      "Профнастил": ["С-8", "НС-35", "Н-60"],
      "Ондулин": ["Смарт", "Компакт", "ДИY"]
    },
    "Фасадные материалы": {
      "Сайдинг": ["Виниловый", "Металлический", "Фиброцементный"],
      "Фасадные панели": ["Под камень", "Под кирпич", "Гладкие"],
      "Блок-хаус": ["Металлический", "Виниловый"],
      "Керамогранит": ["Матовый", "Глянцевый", "Структурный"]
    },
    "Комплектующие": {
      "Водосток": ["ПВХ", "Металл", "Медь"],
      "Мансардные окна": ["ПВХ", "Дерево", "Комбинированные"],
      "Софиты": ["Алюминий", "ПВХ", "Сталь"],
      "Доборные элементы": ["Коньки", "Планки", "Уголки"]
    }
  };

  const products = [
    {
      id: 1,
      name: "Металлочерепица Монтеррей",
      price: "от 450 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Прочная металлочерепица с полимерным покрытием",
      category: "Кровельные материалы",
      subcategory: "Металлочерепица",
      type: "Монтеррей"
    },
    {
      id: 2,
      name: "Гибкая черепица Премиум",
      price: "от 520 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Битумная черепица премиум класса",
      category: "Кровельные материалы",
      subcategory: "Гибкая черепица",
      type: "Премиум"
    },
    {
      id: 3,
      name: "Профнастил НС-35",
      price: "от 380 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Универсальный профнастил для кровли и стен",
      category: "Кровельные материалы",
      subcategory: "Профнастил",
      type: "НС-35"
    },
    {
      id: 4,
      name: "Сайдинг виниловый",
      price: "от 180 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Долговечный виниловый сайдинг",
      category: "Фасадные материалы",
      subcategory: "Сайдинг",
      type: "Виниловый"
    },
    {
      id: 5,
      name: "Фасадные панели под камень",
      price: "от 650 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Декоративные панели с имитацией природного камня",
      category: "Фасадные материалы",
      subcategory: "Фасадные панели",
      type: "Под камень"
    },
    {
      id: 6,
      name: "Водосток ПВХ",
      price: "от 280 ₽/м.п.",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Система водостока из ПВХ",
      category: "Комплектующие",
      subcategory: "Водосток",
      type: "ПВХ"
    },
    {
      id: 7,
      name: "Мансардное окно ПВХ",
      price: "от 12500 ₽/шт",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Мансардное окно с тройным стеклопакетом",
      category: "Комплектующие",
      subcategory: "Мансардные окна",
      type: "ПВХ"
    },
    {
      id: 8,
      name: "Металлочерепица Каскад",
      price: "от 495 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Стильная металлочерепица с волнообразным профилем",
      category: "Кровельные материалы",
      subcategory: "Металлочерепица",
      type: "Каскад"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory === "all") return true;
    if (selectedSubcategory === "all") return product.category === selectedCategory;
    return product.category === selectedCategory && product.subcategory === selectedSubcategory;
  });

  const services = [
    {
      title: "Консультация",
      description: "Помощь в выборе материалов",
      icon: "MessageCircle"
    },
    {
      title: "Расчет материалов",
      description: "Точный расчет количества",
      icon: "Calculator"
    },
    {
      title: "Монтаж",
      description: "Профессиональная установка",
      icon: "Wrench"
    }
  ];

  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Система менеджмента качества",
      number: "RU.3456.ИСО.2024"
    },
    {
      name: "ГОСТ 24045-2016",
      description: "Профили стальные листовые",
      number: "RU.СТ.7891.2024"
    },
    {
      name: "ТР ТС 014/2011",
      description: "Безопасность автомобильных дорог",
      number: "ТС.БД.1234.2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} />
              <h1 className="text-2xl font-bold">КровляСтрой</h1>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
                  <span>Каталог</span>
                  <Icon name="ChevronDown" size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80">
                  {Object.entries(categories).map(([category, subcategories]) => (
                    <div key={category}>
                      <DropdownMenuLabel className="text-sm font-semibold">{category}</DropdownMenuLabel>
                      {Object.entries(subcategories).map(([subcategory, types]) => (
                        <DropdownMenuItem 
                          key={subcategory}
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => {
                            setSelectedCategory(category);
                            setSelectedSubcategory(subcategory);
                            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <span>{subcategory}</span>
                          <Badge variant="outline" className="text-xs">{types.length}</Badge>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator />
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#services" className="hover:text-gray-300 transition-colors">Услуги</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">О компании</a>
              <a href="#certificates" className="hover:text-gray-300 transition-colors">Сертификаты</a>
              <a href="#contacts" className="hover:text-gray-300 transition-colors">Контакты</a>
            </nav>
            <Button variant="secondary" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-gray-900 to-secondary text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-secondary to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Кровельные материалы и фасады
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Профессиональные решения для строительства и ремонта. 
            Качественные материалы с гарантией от производителя.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-secondary hover:bg-blue-600 text-white border-0">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-all duration-300">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Geometric Patterns */}
          <div className="absolute top-10 right-10 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,0 90,35 75,85 25,85 10,35" fill="currentColor" className="text-secondary"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-10 w-24 h-24 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-primary"/>
              <circle cx="50" cy="50" r="20" fill="currentColor" className="text-secondary"/>
            </svg>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="catalogGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#catalogGrid)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl mb-4">
              <Icon name="Package" size={48} className="text-secondary mx-auto" />
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Каталог продукции
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Широкий ассортимент кровельных материалов и фасадных систем от ведущих производителей
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSubcategory("all");
                }}
              >
                Все материалы
              </Button>
              {Object.keys(categories).map((category) => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubcategory("all");
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {selectedCategory !== "all" && (
              <div className="flex flex-wrap gap-2 mb-6">
                <Button 
                  size="sm"
                  variant={selectedSubcategory === "all" ? "secondary" : "ghost"}
                  onClick={() => setSelectedSubcategory("all")}
                >
                  Все подкатегории
                </Button>
                {Object.keys(categories[selectedCategory as keyof typeof categories] || {}).map((subcategory) => (
                  <Button 
                    key={subcategory}
                    size="sm"
                    variant={selectedSubcategory === subcategory ? "secondary" : "ghost"}
                    onClick={() => setSelectedSubcategory(subcategory)}
                  >
                    {subcategory}
                  </Button>
                ))}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Card key={product.id} className="hover:shadow-2xl transition-all duration-500 group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Top Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs border-secondary/20">
                          {product.type}
                        </Badge>
                      </div>
                      
                      {/* Index Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="mb-3">
                      <CardTitle className="text-lg text-left mb-2 group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs bg-gradient-to-r from-secondary/20 to-primary/20 text-primary border-0">
                        {product.subcategory}
                      </Badge>
                    </div>
                    
                    <CardDescription className="mb-4 text-gray-600 group-hover:text-gray-700 transition-colors">
                      {product.description}
                    </CardDescription>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary transition-all duration-300 transform group-hover:scale-105 shadow-lg"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                  
                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Package" size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Товары в данной категории не найдены</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-gray-600">Полный комплекс услуг от консультации до монтажа</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name={service.icon as any} size={48} className="mx-auto text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Сертификаты качества</h3>
            <p className="text-gray-600">Вся продукция сертифицирована и соответствует ГОСТ стандартам</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/img/ec048fce-c569-4969-b3e8-9e4b3bbe5eee.jpg" 
                alt="Сертификаты качества"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{cert.name}</CardTitle>
                        <CardDescription className="mb-2">{cert.description}</CardDescription>
                        <p className="text-sm text-gray-500">№ {cert.number}</p>
                      </div>
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">О компании КровляСтрой</h3>
              <p className="text-gray-600 mb-4">
                Более 15 лет мы занимаемся поставками качественных кровельных материалов 
                и фасадных систем. Работаем напрямую с производителями, что позволяет 
                предлагать лучшие цены на рынке.
              </p>
              <p className="text-gray-600 mb-6">
                Наша команда профессионалов поможет подобрать оптимальное решение 
                для вашего проекта и обеспечит качественный монтаж с гарантией.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Truck" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold">Доставка по региону</h4>
                      <p className="text-gray-600">Быстрая доставка в день заказа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold">Гарантия качества</h4>
                      <p className="text-gray-600">До 25 лет гарантии на материалы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Users" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold">Профессиональная команда</h4>
                      <p className="text-gray-600">Опытные мастера и консультанты</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Контакты</h3>
            <p className="text-gray-600">Свяжитесь с нами для консультации</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="mb-2">Телефон</CardTitle>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">+7 (800) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="mb-2">Email</CardTitle>
                <p className="text-gray-600">info@krovlya-stroy.ru</p>
                <p className="text-gray-600">sales@krovlya-stroy.ru</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="mb-2">Адрес</CardTitle>
                <p className="text-gray-600">г. Москва, ул. Строительная, 15</p>
                <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} />
                <h4 className="text-xl font-bold">КровляСтрой</h4>
              </div>
              <p className="text-gray-300">
                Надежные кровельные решения для вашего дома
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Металлочерепица</a></li>
                <li><a href="#" className="hover:text-white">Гибкая черепица</a></li>
                <li><a href="#" className="hover:text-white">Профнастил</a></li>
                <li><a href="#" className="hover:text-white">Сайдинг</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Консультация</a></li>
                <li><a href="#" className="hover:text-white">Расчет материалов</a></li>
                <li><a href="#" className="hover:text-white">Монтаж</a></li>
                <li><a href="#" className="hover:text-white">Доставка</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Гарантии</a></li>
                <li><a href="#" className="hover:text-white">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 КровляСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}