<?php

/* SensioDistributionBundle::Configurator/final.html.twig */
class __TwigTemplate_008df8c8e5a8c74271806ffdd104f00b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("SensioDistributionBundle::Configurator/layout.html.twig");

        $this->blocks = array(
            'content_class' => array($this, 'block_content_class'),
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
    public function block_content_class($context, array $blocks = array())
    {
        echo "config_done";
    }

    // line 4
    public function block_content($context, array $blocks = array())
    {
        // line 5
        echo "    <h1>Well done!</h1>
    ";
        // line 6
        if ($this->getContext($context, "is_writable")) {
            // line 7
            echo "    <h2>Your distribution is configured!</h2>
    ";
        } else {
            // line 9
            echo "    <h2 class=\"configure-error\">Your distribution is almost configured but...</h2>
    ";
        }
        // line 11
        echo "    <h3>
        <span>
            ";
        // line 13
        if ($this->getContext($context, "is_writable")) {
            // line 14
            echo "                Your parameters.ini has been overwritten with these parameters (in <em>";
            echo twig_escape_filter($this->env, $this->getContext($context, "ini_path"), "html", null, true);
            echo "</em>):
            ";
        } else {
            // line 16
            echo "                Your parameters.ini file is not writeable! Here are the parameters you can copy and paste in <em>";
            echo twig_escape_filter($this->env, $this->getContext($context, "ini_path"), "html", null, true);
            echo "</em>:
            ";
        }
        // line 18
        echo "        </span>
    </h3>

    <textarea class=\"symfony-configuration\">";
        // line 21
        echo twig_escape_filter($this->env, $this->getContext($context, "parameters"), "html", null, true);
        echo "</textarea>

    ";
        // line 23
        if ($this->getContext($context, "welcome_url")) {
            // line 24
            echo "        <ul>
            <li><a href=\"";
            // line 25
            echo twig_escape_filter($this->env, $this->getContext($context, "welcome_url"), "html", null, true);
            echo "\">Go to the Welcome page</a></li>
        </ul>
    ";
        }
    }

    public function getTemplateName()
    {
        return "SensioDistributionBundle::Configurator/final.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  82 => 25,  79 => 24,  77 => 23,  72 => 21,  67 => 18,  61 => 16,  55 => 14,  53 => 13,  49 => 11,  45 => 9,  41 => 7,  39 => 6,  36 => 5,  33 => 4,  27 => 3,);
    }
}
