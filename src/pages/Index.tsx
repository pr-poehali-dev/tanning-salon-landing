import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">Sun&City</div>
            <Badge variant="secondary" className="text-xs">
              Эксперт №1 в России
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#studios" className="hover:text-primary transition-colors">Студии</a>
            <a href="#certificate" className="hover:text-primary transition-colors">Сертификат</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://cdn.poehali.dev/files/84418abc-9c9e-41c7-a1ee-e85e1bed13ee.jpg')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-lg">
            <div className="mb-6">
              <Badge className="mb-4 bg-primary/90 text-primary-foreground">
                Эксперт №1 в России в области загара с 1999 года
              </Badge>
            </div>
            
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Сертификат<br />
                <span className="text-accent">1000 ₽</span><br />
                на первый визит
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Sun&City — твой загар в 2025 году
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg rounded-full shadow-lg"
              >
                Получить сертификат
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-warm-100 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">27 000</div>
              <div className="text-muted-foreground">клиентов доверили</div>
            </div>
            <div className="bg-warm-100 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">студий в Москве</div>
            </div>
            <div className="bg-warm-100 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">лет опыта</div>
            </div>
            <div className="bg-warm-100 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">безопасность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги загара</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный загар с современным оборудованием и индивидуальным подходом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-warm-200">
              <div className="text-accent mb-4">
                <Icon name="Sun" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Солярий</h3>
              <p className="text-muted-foreground mb-4">
                Современное оборудование европейских производителей для равномерного загара
              </p>
              <div className="text-2xl font-bold text-primary mb-2">от 150 ₽</div>
              <div className="text-sm text-muted-foreground">за минуту</div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-warm-200">
              <div className="text-accent mb-4">
                <Icon name="Sparkles" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Турбо-загар</h3>
              <p className="text-muted-foreground mb-4">
                Интенсивный загар нового поколения за максимально короткое время
              </p>
              <div className="text-2xl font-bold text-primary mb-2">от 250 ₽</div>
              <div className="text-sm text-muted-foreground">за минуту</div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-warm-200">
              <div className="text-accent mb-4">
                <Icon name="Heart" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">VIP-загар</h3>
              <p className="text-muted-foreground mb-4">
                Премиальные кабины с максимальным комфортом и индивидуальным сервисом
              </p>
              <div className="text-2xl font-bold text-primary mb-2">от 400 ₽</div>
              <div className="text-sm text-muted-foreground">за минуту</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Studios Section */}
      <section id="studios" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши студии в Москве</h2>
            <p className="text-xl text-muted-foreground">
              6 локаций в удобных районах города
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Арбатская", address: "ул. Арбат, 15", metro: "Арбатская" },
              { name: "Тверская", address: "ул. Тверская, 12", metro: "Тверская" },
              { name: "Китай-город", address: "ул. Маросейка, 8", metro: "Китай-город" },
              { name: "Сокольники", address: "Сокольническая пл., 6", metro: "Сокольники" },
              { name: "Новослободская", address: "ул. Новослободская, 20", metro: "Новослободская" },
              { name: "Парк Культуры", address: "Зубовский бул., 4", metro: "Парк Культуры" }
            ].map((studio, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">{studio.name}</h3>
                    <p className="text-muted-foreground">{studio.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Navigation" size={16} />
                  <span>м. {studio.metro}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Получите сертификат на 1000 ₽
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Подарок новым клиентам для первого визита в любую из наших студий
            </p>
            
            <Card className="p-8 bg-white shadow-xl max-w-md mx-auto">
              <div className="mb-6">
                <div className="text-accent mb-4">
                  <Icon name="Gift" size={48} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Сертификат 1000 ₽</h3>
                <p className="text-muted-foreground">на первый визит</p>
              </div>
              
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Номер телефона" />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  Получить сертификат
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sun&City</h3>
              <p className="text-primary-foreground/80">
                Эксперт №1 в России в области загара с 1999 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@suncity.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Время работы</h4>
              <div className="text-primary-foreground/80">
                <p>Пн-Вс: 9:00 - 22:00</p>
                <p>Без выходных</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Sun&City. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}