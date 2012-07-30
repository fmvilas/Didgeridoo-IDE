<?php

/* AcmeDemoBundle:Secured:login.html.twig */
class __TwigTemplate_cef95ba19fb51d991b8ae572f4a0636d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("AcmeDemoBundle::layout.html.twig");

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "AcmeDemoBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 29
        $context["code"] = $this->env->getExtension('demo')->getCode($this);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        // line 4
        echo "    <h1>Login</h1>

    <p>
        Choose between two default users: <em>user/userpass</em> <small>(ROLE_USER)</small> or <em>admin/adminpass</em> <small>(ROLE_ADMIN)</small>
    </p>

    ";
        // line 10
        if ($this->getContext($context, "error")) {
            // line 11
            echo "        <div class=\"error\">";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "error"), "message"), "html", null, true);
            echo "</div>
    ";
        }
        // line 13
        echo "
    <form action=\"";
        // line 14
        echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("_security_check"), "html", null, true);
        echo "\" method=\"post\" id=\"login\">
        <div>
            <label for=\"username\">Username</label>
            <input type=\"text\" id=\"username\" name=\"_username\" value=\"";
        // line 17
        echo twig_escape_filter($this->env, $this->getContext($context, "last_username"), "html", null, true);
        echo "\" />
        </div>

        <div>
            <label for=\"password\">Password</label>
            <input type=\"password\" id=\"password\" name=\"_password\" />
        </div>

        <input type=\"submit\" class=\"symfony-button-grey\" value=\"LOGIN\" />
    </form>
";
    }

    public function getTemplateName()
    {
        return "AcmeDemoBundle:Secured:login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 17,  50 => 14,  47 => 13,  41 => 11,  39 => 10,  31 => 4,  28 => 3,  23 => 29,);
    }
}
