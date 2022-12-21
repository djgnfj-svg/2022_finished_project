from django.shortcuts import render
from django.shortcuts import redirect
from django.urls import reverse_lazy, reverse
from django.views.generic import FormView
from django.contrib import auth, messages
from django.contrib.auth.models import User
from User.forms import LoginForm, RegisterForm
# Create your views here.

def home_view(request):
	return render(request, "home.html")

class RegisterView(FormView):
	template_name = "register.html"
	form_class = RegisterForm
	success_url = reverse_lazy('home')

	def form_valid(self, form):
		email = form.cleaned_data['email']
		password = form.cleaned_data['password']

		user = User.objects.create_user(email, email, password)
		return super().form_valid(form)

class LoginView(FormView):
    template_name = 'login.html'
    success_url = reverse_lazy('index')
    form_class = LoginForm

    def form_valid(self, form):
        email = form.cleaned_data['email']
        password = form.cleaned_data['password']
        user = auth.authenticate(username=email, password=password)
        if user is not None:
            auth.login(self.request, user)
            return super().form_valid(form)
        else:
            messages.warning(self.request, '계정 혹은 비밀번호를 확인해주세요.')
            return redirect(reverse('login'))
