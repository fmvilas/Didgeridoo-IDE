<?php

/* SensioDistributionBundle:Configurator/Step:doctrine.html.twig */
class __TwigTemplate_0ce91480c094723b97a704ae391aedc5 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("SensioDistributionBundle::Configurator/layout.html.twig");

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "SensioDistributionBundle::Configurator/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_title($context, array $blocks = array())
    {
        echo "Symfony - Configure database";
    }

    // line 5
    public function block_content($context, array $blocks = array())
    {
        // line 6
        echo "    ";
        echo $this->env->getExtension('form')->setTheme($this->getContext($context, "form"), array("SensioDistributionBundle::Configurator/form.html.twig", ));
        // line 7
        echo "    ";
        $this->env->loadTemplate("SensioDistributionBundle::Configurator/steps.html.twig")->display(array_merge($context, array("index" => $this->getContext($context, "index"), "count" => $this->getContext($context, "count"))));
        // line 8
        echo "
    <h1>Configure your Database</h1>
    <p>If your website needs a database connection, please configure it here.</p>

    ";
        // line 12
        echo $this->env->getExtension('form')->renderErrors($this->getContext($context, "form"));
        echo "
    <form action=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("_configurator_step", array("index" => $this->getContext($context, "index"))), "html", null, true);
        echo "\" method=\"POST\">
        <div class=\"symfony-form-column\">
            ";
        // line 15
        echo $this->env->getExtension('form')->renderRow($this->getAttribute($this->getContext($context, "form"), "driver"));
        echo "
            ";
        // line 16
        echo $this->env->getExtension('form')->renderRow($this->getAttribute($this->getContext($context, "form"), "host"));
        echo "
            ";
        // line 17
        echo $this->env->getExtension('form')->renderRow($this->getAttribute($this->getContext($context, "form"), "name"));
        echo "
        </div>
        <div class=\"symfony-form-column\">
            ";
        // line 20
        echo $this->env->getExtension('form')->renderRow($this->getAttribute($this->getContext($context, "form"), "user"));
        echo "
            ";
        // line 21
        echo $this->env->getExtension('form')->renderRow($this->getAttribute($this->getContext($context, "form"), "password"));
        echo "
        </div>

        ";
        // line 24
        echo $this->env->getExtension('form')->renderRest($this->getContext($context, "form"));
        echo "

        <div class=\"symfony-form-footer\">
            <p><input type=\"submit\" value=\"Next Step\" class=\"symfony-button-grey\" /></p>
            <p>* mandatory fields</p>
        </div>
    </form>
";
    }

    public function getTemplateName()
    {
        return "SensioDistributionBundle:Configurator/Step:doctrine.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  81 => 24,  75 => 21,  71 => 20,  65 => 17,  61 => 16,  57 => 15,  52 => 13,  48 => 12,  42 => 8,  39 => 7,  36 => 6,  33 => 5,  27 => 3,);
    }
}
