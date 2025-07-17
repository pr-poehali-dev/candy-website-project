import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-light to-beige">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-ochre/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cookie" className="h-8 w-8 text-chocolate" />
              <h1 className="text-2xl font-bold text-chocolate">Mne_vkusno</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-chocolate hover:text-ochre transition-colors">Главная</a>
              <a href="#about" className="text-chocolate hover:text-ochre transition-colors">О нас</a>
              <a href="#products" className="text-chocolate hover:text-ochre transition-colors">Продукция</a>
              <a href="#contact" className="text-chocolate hover:text-ochre transition-colors">Контакты</a>
            </nav>
            <Button className="bg-chocolate hover:bg-chocolate-dark text-white">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-chocolate mb-6 animate-fade-in">
              Первоклассные ингредиенты<br />
              <span className="text-ochre">стандартные цены</span>
            </h2>
            <p className="text-xl text-chocolate/80 mb-8 animate-fade-in">
              Создаем торты и конфеты ручной работы для особых моментов.<br />
              Качество премиум-класса для банкетов и свадеб в Москве.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-chocolate hover:bg-chocolate-dark text-white px-8 py-3">
                <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" className="border-chocolate text-chocolate hover:bg-chocolate hover:text-white px-8 py-3">
                <Icon name="Heart" className="mr-2 h-5 w-5" />
                Свадебные торты
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-beige-light/50 via-ochre/10 to-beige-light/50"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-chocolate mb-4">О нас</h2>
              <p className="text-xl text-chocolate/80">Наша философия и подход к созданию кондитерских изделий</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-chocolate">Наша концепция</h3>
                  <p className="text-chocolate/80 leading-relaxed">
                    Мы верим в простую формулу: используем только самые качественные ингредиенты — 
                    элитный шоколад, натуральные наполнители, свежие продукты. При этом наши цены 
                    остаются на уровне стандартного рынка.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-chocolate">Целевая аудитория</h3>
                  <p className="text-chocolate/80 leading-relaxed">
                    Мы создаем для взыскательных москвичек, которые ценят качество и красоту. 
                    Специализируемся на банкетах и свадебных тортах — тех моментах, 
                    когда важна каждая деталь.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-beige-light rounded-lg">
                  <Icon name="Award" className="h-12 w-12 text-ochre mx-auto mb-4" />
                  <h4 className="font-semibold text-chocolate mb-2">Качество</h4>
                  <p className="text-sm text-chocolate/80">Только премиум ингредиенты</p>
                </div>
                <div className="text-center p-6 bg-beige-light rounded-lg">
                  <Icon name="Users" className="h-12 w-12 text-ochre mx-auto mb-4" />
                  <h4 className="font-semibold text-chocolate mb-2">Опыт</h4>
                  <p className="text-sm text-chocolate/80">Более 100 свадеб</p>
                </div>
                <div className="text-center p-6 bg-beige-light rounded-lg">
                  <Icon name="Heart" className="h-12 w-12 text-ochre mx-auto mb-4" />
                  <h4 className="font-semibold text-chocolate mb-2">Индивидуальность</h4>
                  <p className="text-sm text-chocolate/80">Уникальный дизайн</p>
                </div>
                <div className="text-center p-6 bg-beige-light rounded-lg">
                  <Icon name="Clock" className="h-12 w-12 text-ochre mx-auto mb-4" />
                  <h4 className="font-semibold text-chocolate mb-2">Сроки</h4>
                  <p className="text-sm text-chocolate/80">Точно в срок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-beige to-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-chocolate mb-4">Ассортимент продукции</h2>
              <p className="text-xl text-chocolate/80">Торты и конфеты ручной работы для любого случая</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Торты */}
              <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src="/img/4bddab7c-c847-4b49-9670-9fe76ef621e9.jpg" 
                      alt="Торты"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-chocolate text-xl">Торты</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-chocolate/80 mb-4">
                    Многослойные торты с премиальными начинками: бельгийский шоколад, 
                    натуральные ягоды, крем-сыр Philadelphia.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Шоколадные</Badge>
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Ягодные</Badge>
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Творожные</Badge>
                  </div>
                  <Button className="w-full bg-chocolate hover:bg-chocolate-dark text-white">
                    Заказать торт
                  </Button>
                </CardContent>
              </Card>

              {/* Конфеты */}
              <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src="/img/e8489a8d-f2ed-4cc0-8cda-5f1c475fc996.jpg" 
                      alt="Конфеты"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-chocolate text-xl">Конфеты</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-chocolate/80 mb-4">
                    Авторские конфеты ручной работы с изысканными начинками: 
                    трюфели, пралине, ганаш с коньяком.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Трюфели</Badge>
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Пралине</Badge>
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Ганаш</Badge>
                  </div>
                  <Button className="w-full bg-chocolate hover:bg-chocolate-dark text-white">
                    Заказать конфеты
                  </Button>
                </CardContent>
              </Card>

              {/* Свадебные торты */}
              <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src="/img/03dedf84-b6a9-4660-b242-c76fa3901a62.jpg" 
                      alt="Свадебные торты"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-chocolate text-xl">Свадебные торты</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-chocolate/80 mb-4">
                    Эксклюзивные многоярусные торты для свадеб. Индивидуальный дизайн, 
                    живые цветы, роспись вручную.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Многоярусные</Badge>
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Цветы</Badge>
                    <Badge variant="secondary" className="bg-ochre/20 text-ochre">Роспись</Badge>
                  </div>
                  <Button className="w-full bg-chocolate hover:bg-chocolate-dark text-white">
                    Заказать свадебный торт
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-ochre/10 to-chocolate/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-chocolate mb-8">Специальные предложения</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Gift" className="h-16 w-16 text-ochre" />
                  </div>
                  <CardTitle className="text-chocolate text-2xl">Свадебный пакет</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-chocolate/80 mb-4">
                    Торт + 100 конфет в подарочной упаковке для гостей. 
                    Скидка 15% при заказе за месяц до свадьбы.
                  </CardDescription>
                  <Button className="w-full bg-ochre hover:bg-ochre-dark text-white">
                    Узнать подробности
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Calendar" className="h-16 w-16 text-ochre" />
                  </div>
                  <CardTitle className="text-chocolate text-2xl">Корпоративные заказы</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-chocolate/80 mb-4">
                    Торты и конфеты для корпоративных мероприятий. 
                    Индивидуальный подход, логотип компании.
                  </CardDescription>
                  <Button className="w-full bg-ochre hover:bg-ochre-dark text-white">
                    Оформить заказ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-chocolate mb-4">Контакты и заказ</h2>
              <p className="text-xl text-chocolate/80">Свяжитесь с нами для оформления заказа</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="h-6 w-6 text-ochre mt-1" />
                  <div>
                    <h3 className="font-semibold text-chocolate mb-2">Телефон</h3>
                    <p className="text-chocolate/80">+7 (495) 123-45-67</p>
                    <p className="text-chocolate/80">+7 (926) 987-65-43</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="h-6 w-6 text-ochre mt-1" />
                  <div>
                    <h3 className="font-semibold text-chocolate mb-2">Электронная почта</h3>
                    <p className="text-chocolate/80">info@mne-vkusno.ru</p>
                    <p className="text-chocolate/80">orders@mne-vkusno.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="h-6 w-6 text-ochre mt-1" />
                  <div>
                    <h3 className="font-semibold text-chocolate mb-2">Адрес</h3>
                    <p className="text-chocolate/80">г. Москва, ул. Кондитерская, 15</p>
                    <p className="text-chocolate/80">Работаем: Пн-Сб 9:00-20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" className="h-6 w-6 text-ochre mt-1" />
                  <div>
                    <h3 className="font-semibold text-chocolate mb-2">Время изготовления</h3>
                    <p className="text-chocolate/80">Торты: 2-3 дня</p>
                    <p className="text-chocolate/80">Конфеты: 1-2 дня</p>
                    <p className="text-chocolate/80">Свадебные торты: 5-7 дней</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-chocolate text-2xl">Форма заказа</CardTitle>
                  <CardDescription className="text-chocolate/80">
                    Оставьте заявку, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Имя *
                      </label>
                      <Input 
                        placeholder="Ваше имя"
                        className="border-ochre/30 focus:border-ochre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Телефон *
                      </label>
                      <Input 
                        placeholder="+7 (999) 123-45-67"
                        className="border-ochre/30 focus:border-ochre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        className="border-ochre/30 focus:border-ochre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Тип заказа
                      </label>
                      <select className="w-full p-2 border border-ochre/30 rounded-md focus:border-ochre focus:ring-1 focus:ring-ochre">
                        <option>Торт</option>
                        <option>Конфеты</option>
                        <option>Свадебный торт</option>
                        <option>Корпоративный заказ</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-chocolate mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        placeholder="Опишите ваши пожелания..."
                        rows={4}
                        className="border-ochre/30 focus:border-ochre"
                      />
                    </div>
                    
                    <Button className="w-full bg-chocolate hover:bg-chocolate-dark text-white">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chocolate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cookie" className="h-8 w-8 text-ochre" />
                <h3 className="text-xl font-bold">Mne_vkusno</h3>
              </div>
              <p className="text-white/80">
                Первоклассные ингредиенты при стандартных расценках
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-ochre transition-colors">Торты</a></li>
                <li><a href="#" className="hover:text-ochre transition-colors">Конфеты</a></li>
                <li><a href="#" className="hover:text-ochre transition-colors">Свадебные торты</a></li>
                <li><a href="#" className="hover:text-ochre transition-colors">Корпоративные заказы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-ochre transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-ochre transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-ochre transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-ochre transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-ochre transition-colors">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-ochre transition-colors">
                  <Icon name="MessageCircle" className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-ochre transition-colors">
                  <Icon name="Phone" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 Mne_vkusno. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}